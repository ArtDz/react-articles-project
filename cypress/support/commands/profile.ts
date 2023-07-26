export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asd' },
        body: {
            id: '1',
            first: 'Tomas',
            lastname: 'Kodoev',
            age: 23,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'dzugaev1998@bk.ru',
            avatar: 'https://www.arabsauto.com/wp-content/uploads/2020/04/Bugatti-chiron-2020-5.jpg',
        },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
