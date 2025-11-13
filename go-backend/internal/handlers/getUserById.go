package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

func GetUserById(c *gin.Context) {

	type result struct {
		Name  string
		Email string
		Age   int
	}
	id := c.Param("id")
	database := db.DB

	var rst result

	database.Model(model.User{}).Select("name", "email", "age").Where("id = ?", id).Scan(&rst)
	c.JSON(http.StatusOK, gin.H{"user": rst})
}
