function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}` + "\n" + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let output =
                super.toString() + "\n" + `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                output += `\nComments:`;
                for (const comment of this.comments) {
                    output += "\n" + ` * ${comment}`;
                }
                return output;
            }
            return output;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this._views = Number(views);
        }

        get views() {
            return this._views;
        }

        view() {
            this._views++;
            return this;
        }
        toString() {
            return super.toString() + "\n" + `Views: ${this.views}`;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}