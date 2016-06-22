class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find params[:id]
  end

  def new
  end

  def update
    @post = Post.update(params[:id], post_params)

    if @post.save
      render json: { redirect_url: posts_path }
    else
      render json: { errors: @post.errors.full_messages }
    end
  end

  def edit
    @post = Post.find params[:id]
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: { redirect_url: posts_path }
    else
      render json: { errors: @post.errors.full_messages }
    end
  end

  def from_server
    @posts = Post.all
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id)
  end
end
