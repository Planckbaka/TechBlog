package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

type response struct {
	Title    string     `json:"title"`
	Author   string     `json:"author"`
	ReadTime string     `json:"read_time"`
	Summary  string     `json:"summary"`
	Section  []rsection `json:"section"`
	Content  string     `json:"content"`
}

type rsection struct {
	Key   string
	Title string
	Order string
}

func GetArticleById(c *gin.Context) {

	id := c.Param("id")
	dbConn := db.DB

	var rsc []rsection

	var res response

	dbConn.Model(model.Article{}).Select("title", "author", "read_time", "summary", "content").Where("id = ?", id).Scan(&res)
	dbConn.Model(model.Section{}).Select("key", "title", "order").Where("article_id = ?", id).Scan(&rsc)
	res.Section = rsc
	c.JSON(http.StatusOK, gin.H{"response": res})
}
