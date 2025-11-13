package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

func DeleteArticleById(c *gin.Context) {

	database := db.DB

	id := c.Param("id")

	var article model.Article

	database.Where("id = ?", id).Delete(&article)

	c.JSON(http.StatusOK, gin.H{"message": "Article deleted successfully"})
}
