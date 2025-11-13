package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

func DeleteUserById(c *gin.Context) {

	database := db.DB

	id := c.Param("id")

	var user model.User

	database = database.Where("id = ?", id).Delete(&user)

	c.JSON(http.StatusOK, gin.H{"message": "User deleted successfully"})
}
