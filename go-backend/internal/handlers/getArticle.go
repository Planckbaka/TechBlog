package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

type responseWithId struct {
	ID       string
	Title    string `json:"title"`
	Author   string `json:"author"`
	ReadTime string `json:"read_time"`
	Summary  string `json:"summary"`
	Content  string `json:"content"`
}

func GetArticle(c *gin.Context) {
	dbConn := db.DB

	var res []responseWithId

	dbConn.Model(model.Article{}).Select("id", "title", "author", "read_time", "content").Limit(10).Scan(&res)
	c.JSON(http.StatusOK, gin.H{"response": res})
}
