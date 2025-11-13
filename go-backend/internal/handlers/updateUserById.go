package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

func UpdateUserById(c *gin.Context) {

	// connect to database
	database := db.DB
	//get the user's id which need to be change
	id := c.Param("id")

	var user model.User
	// create a struct
	var updatedUser struct {
		Name string `json:"name"`
		Age  int    `json:"age"`
	}

	err := c.ShouldBind(&updatedUser)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user id not exist"})
		return
	}

	if err := database.First(&user, id).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user.Name = updatedUser.Name
	user.Age = updatedUser.Age
	//save
	database.Save(&user)

	//
	c.JSON(http.StatusOK, gin.H{"user": user, "message": "User updated successfully"})
}
