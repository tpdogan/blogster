module ArticlesHelper
  def save_tags(article_id, params)
    tagArray = params.split(', ')
    tagArray.each do |tag|
      # Check is tag already exists
      tagCheck = Tag.find_by_name(tag)
      unless tagCheck
        tagCheck = Tag.create(:name => tag)
      end
      # Create a relation between article and tag
      ArticleToTag.create(:article_id => article_id, :tag_id => tagCheck.id)
    end
  end
end