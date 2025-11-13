package handlers

import (
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func CreateUserHandler(c *gin.Context) {
	db1 := db.DB
	var input struct {
		Name     string `json:"name" binding:"required" gorm:"type:varchar(255);not null;unique"`
		Email    string `json:"email" binding:"required" gorm:"uniqueIndex"`
		Password string `json:"password" gorm:"type:varchar(255);not null"`
		Age      int    `json:"age" binding:"required" gorm:"not null;default:0"`
	}

	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	// 2. 密码哈希（永远不要原文存密码）
	hashed, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "password hash failed"})
		return
	}
	// create model and write into db
	user := model.User{
		Name:     input.Name,
		Email:    input.Email,
		Password: string(hashed),
		Age:      input.Age,
	}

	if err := db1.Create(&user).Error; err != nil {
		// 处理唯一约束冲突等
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	// return without password
	c.JSON(http.StatusCreated, gin.H{
		"id":        user.ID,
		"name":      user.Name,
		"email":     user.Email,
		"createdAt": user.CreatedAt,
	})
	return
}
