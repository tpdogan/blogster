class CommentsController < ApplicationController
  before_action :authenticate_author!
  def create
    if params[:type] == 'Article'
      article = Article.find(params[:id])
      comment = article.comments.build(comment_params)
      comment.update(:author_id => current_author.id)
    else
      comment = Comment.find(params[:id])
      subComment = comment.comments.build(comment_params)
      subComment.update(:author_id => current_author.id)
    end
    redirect_to article_path(params[:article_id])
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end