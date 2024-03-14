function getArticleGenerator(articles) {
    let articlesContent = Array.from(articles);
    const constRef = document.getElementById("content");

    return () => {
        if (!articlesContent.length) {
            return;
        }

        let currentArticleValue = articlesContent.shift();
        let newArticle = document.createElement("article");
        newArticle.textContent = currentArticleValue;
        constRef.appendChild(newArticle);
    }
}
