import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema'
import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'

export interface ArticlesDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
