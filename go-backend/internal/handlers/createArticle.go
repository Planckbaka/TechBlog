package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

type SectionInput struct {
	Key   string `json:"key" form:"key" binding:"required"`     // 前端是 "key"
	Title string `json:"title" form:"title" binding:"required"` // 前端是 "title"
	Order int    `json:"order" form:"order"`                    // optional
}

func CreateArticle(c *gin.Context) {
	database := db.DB
	var inputArticle struct {
		Title    string         `json:"title" form:"title" binding:"required"`
		Author   string         `json:"author" form:"author" binding:"required"`
		ReadTime string         `json:"read_time" form:"read_time" binding:"required"`
		Summary  string         `json:"summary" form:"summary" binding:"required"`
		Section  []SectionInput `json:"section" form:"section" binding:"required"`
		Content  string         `json:"content" form:"content" binding:"required"`
	}
	if err := c.ShouldBind(&inputArticle); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	article := model.Article{
		Title:    inputArticle.Title,
		Author:   inputArticle.Author,
		ReadTime: inputArticle.ReadTime,
		Summary:  inputArticle.Summary,
		Content:  inputArticle.Content,
	}
	for _, s := range inputArticle.Section {
		article.Section = append(article.Section, model.Section{
			Key:   s.Key,
			Title: s.Title,
			Order: s.Order,
		})
	}

	if err := database.Create(&article).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// return successful message
	c.JSON(http.StatusCreated, gin.H{"article": article})
}
