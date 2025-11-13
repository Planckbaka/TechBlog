package hanlders

import (
	"fmt"
	"net/http"

	"github.com/Planckbaka/TechBlog/go-backend/internal/db"
	"github.com/Planckbaka/TechBlog/go-backend/internal/model"
	"github.com/gin-gonic/gin"
)

func GetHandler(c *gin.Context) {
	database := db.DB

	// 创建一个User变量来接收查询结果
	var users []model.User

	// works because model is specified using `db.Model()`
	database.Model(&model.User{}).Limit(10).Find(&users)
	fmt.Println(users)

	// 成功查询到用户,返回用户数据
	c.JSON(http.StatusOK, gin.H{"user": users})
}
