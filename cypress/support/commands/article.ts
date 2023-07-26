import { Article } from '../../../src/entities/Article'

const defaultArticle = {
    title: 'Тестовая статья',
    subtitle: 'БиологиЯ',
    img: 'https://onehealthtrust.org/wp-content/uploads/2021/02/shutterstock_1676155375-scaled.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
}

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asd' },
            body: article ?? defaultArticle,
        })
        .then(resp => resp.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asd' },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
