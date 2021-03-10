class CommentsController < ApplicationController
  before_action :authenticate_author!
  def create
    if params[:type] == 'Article'
      article = Article.find(params[:id])
      comment = article.comments.build(comment_params)
      comment.update(:author_id => current_author.id)
    else
    end
    redirect_to article_path(params[:article])
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end