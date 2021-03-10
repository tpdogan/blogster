module ArticlesHelper
  def save_tags(article, params)
    newTagArray = params.downcase.split(', ')
    oldTagArray = list_tags(article)

    remove_tags(article, oldTagArray - newTagArray)
    add_tags(article, newTagArray - oldTagArray)
  end

  def remove_tags(article, tagArray)
    tagArray.each do |tagName|
      tag = Tag.find_by_name(tagName)
      ArticleToTag.where(:article_id => article.id, :tag_id => tag.id).destroy_all
      check_destroy_tag(tag)
    end
  end

  def add_tags(article, tagArray)
    tagArray.each do |tagName|
      tag = Tag.find_by_name(tagName)
      tag = Tag.create(:name => tagName) unless tag
      ArticleToTag.create(:article_id => article.id, :tag_id => tag.id)
    end
  end

  def list_tags(article)
    article.tags.map { |tag| tag.name.downcase }
  end

  def check_destroy_tag(tag)
    if tag.articles.empty?
      tag.destroy
    end
  end
end