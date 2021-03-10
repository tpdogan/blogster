class ArticlesController < ApplicationController
  before_action :authenticate_author!, except: [:index, :show]
  include ArticlesHelper

  def index
    @articles = params[:tag] ? Tag.find_by_name(params[:tag]).articles.reverse :
                params[:author] ? Author.find_by_username(params[:author]).articles.reverse :
                Article.all.reverse
  end

  def new
    @article = Article.new
  end

  def create
    @article = current_author.articles.build(article_params)

    respond_to do |format|
      if @article.save
        save_tags(@article.id, params[:article_tags])
        format.html { redirect_to articles_path, notice: 'Article was successfully created.' }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { render :new}
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    respond_to do |format|
      if @article.update(article_params)
        save_tags(@article.id, params[:article_tags])
        format.html { redirect_to article_path(@article), notice: 'Article was successfully created.' }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { render :edit}
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
  end
  
  private
  
  def article_params
    params.require(:article).permit(:title, :body, :image)
  end
end