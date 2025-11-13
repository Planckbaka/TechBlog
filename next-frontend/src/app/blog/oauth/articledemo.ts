// src/data/articles.ts
export type Section = { id: string; title: string };

export type Article = {
  id: number;
  page: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  sections: Section[];
  content: string;
};

export const articles: Article[] = [
  {
    id: 1,
    page:"oauth",
    title: "Flexbox 布局完全指南",
    author: "张三",
    date: "2024-10-15",
    readTime: "8 分钟",
    summary: "深入理解 Flexbox 布局系统",
    sections: [
      { id: "intro", title: "什么是 Flexbox" },
      { id: "container", title: "容器属性" },
      { id: "items", title: "项目属性" },
      { id: "examples", title: "实际案例" }
    ],
    content: `
# 什么是 Flexbox

Flexbox(弹性盒子)是一种一维布局方法,用于在容器中排列项目。与传统的块级布局或内联布局不同,Flexbox 提供了更加灵活的空间分配和对齐能力。

当你将一个元素的 display 属性设置为 flex 或 inline-flex 时,这个元素就变成了一个 flex 容器,它的直接子元素自动成为 flex 项目。

这种布局方式特别适合创建响应式设计,因为它能够自动适应不同的屏幕尺寸。无论是导航栏、卡片布局还是表单元素,Flexbox 都能提供优雅的解决方案。

## 容器属性

Flex 容器有几个重要的属性可以控制子项目的排列方式。理解这些属性是掌握 Flexbox 的关键。

**flex-direction** 决定主轴的方向,可以是 row(横向)、column(纵向)、row-reverse 或 column-reverse。这个属性定义了项目的排列方向。主轴的方向会影响其他所有 Flexbox 属性的行为。

**justify-content** 控制项目在主轴上的对齐方式。常用的值包括 flex-start、center、flex-end、space-between 和 space-around。这个属性对于水平居中或创建等间距布局特别有用。它决定了当主轴上有剩余空间时,项目应该如何分布。

**align-items** 控制项目在交叉轴上的对齐方式。它决定了项目在垂直方向上如何对齐,可以实现垂直居中等效果。这是实现完美居中的最简单方法之一。

**flex-wrap** 决定项目是否换行。默认情况下,所有项目都会尽量排在一行上。但如果设置了 wrap,当空间不足时项目会自动换到下一行。

## 项目属性

Flex 项目也有自己的属性,这些属性让每个项目可以有个性化的表现。

**flex-grow** 定义项目的放大比例,默认为 0。如果所有项目的 flex-grow 都为 1,它们将等分剩余空间。如果某个项目的 flex-grow 为 2,其他为 1,那么这个项目占据的剩余空间是其他项目的两倍。

**flex-shrink** 定义项目的缩小比例,默认为 1。当空间不足时,项目会按比例缩小。如果某个项目的 flex-shrink 为 0,它将不会缩小,保持原有尺寸。

**flex-basis** 定义了在分配多余空间之前,项目占据的主轴空间。浏览器根据这个属性计算是否有多余空间。它类似于 width 或 height,但更加灵活。

**align-self** 允许单个项目有与其他项目不一样的对齐方式。它会覆盖容器的 align-items 属性。这在需要某个项目特殊对齐时非常有用。

## 实际案例

使用 Flexbox,我们可以轻松实现许多常见的布局模式。让我们看一些实际应用场景。

导航栏是 Flexbox 的完美应用场景。你可以用 justify-content: space-between 让 logo 在左侧,菜单项在右侧,它们之间的空间会自动分配。

卡片布局也是常见需求。使用 flex-wrap 和适当的 flex-basis,你可以创建一个响应式的卡片网格,卡片会根据屏幕尺寸自动调整排列。

表单布局经常需要标签和输入框对齐。使用 Flexbox 的 align-items: center 可以轻松实现垂直居中,让表单看起来更加整洁专业。

页脚固定在底部是另一个经典问题。通过给主内容区域设置 flex: 1,它会占据所有可用空间,自然把页脚推到底部。

在实际项目中,Flexbox 经常与 CSS Grid 结合使用。Flexbox 适合一维布局(单行或单列),而 Grid 更适合二维布局(行和列同时存在)。掌握两者的使用场景能让你的布局能力更上一层楼。

掌握 Flexbox 是现代前端开发的必备技能,它能显著提高你的布局效率和代码质量。随着练习的深入,你会发现许多复杂的布局问题都能用 Flexbox 优雅地解决。
    `
  },
  {
    id: 2,
    page:"1",
    title: "Tailwind CSS 实战技巧",
    author: "李四",
    date: "2024-10-10",
    readTime: "10 分钟",
    summary: "提升开发效率的 Tailwind 技巧",
    sections: [
      { id: "why", title: "为什么选择 Tailwind" },
      { id: "utilities", title: "实用工具类" },
      { id: "responsive", title: "响应式设计" },
      { id: "custom", title: "自定义配置" }
    ],
    content: `
# 为什么选择 Tailwind

传统的 CSS 开发方式需要我们不断在 HTML 和 CSS 文件之间切换,思考类名的命名,并维护越来越庞大的样式表。Tailwind CSS 改变了这种工作流程。

使用 Tailwind,你可以直接在 HTML 中应用预定义的工具类,比如 flex、pt-4、text-center 等。这种方式让样式与结构紧密结合,减少了上下文切换的成本。

更重要的是,Tailwind 的设计系统确保了整个项目的视觉一致性。所有的间距、颜色、字体大小都来自预定义的设计令牌,这避免了随意使用魔法数字的问题。

## 实用工具类

Tailwind 提供了数千个工具类,覆盖了几乎所有的 CSS 属性。这些类名都遵循直观的命名规则,比如 w-64 表示宽度为 16rem,bg-blue-500 表示中等深度的蓝色背景。

间距类(如 p-4、m-8)使用一致的间距比例,这确保了整个应用的视觉节奏。颜色类提供了从 50 到 900 的色阶,让你能精确控制颜色的深浅。

Flexbox 和 Grid 的工具类让布局变得异常简单。只需要 flex items-center justify-between 就能创建一个两端对齐且垂直居中的容器。

## 响应式设计

Tailwind 的响应式设计采用移动优先的策略。你可以使用前缀来指定不同断点的样式,比如 md:w-1/2 表示在中等屏幕及以上宽度为 50%。

这种方式让响应式设计变得声明式和可预测。你可以清楚地看到每个元素在不同屏幕尺寸下的表现,而不需要跳转到单独的媒体查询块。

## 自定义配置

虽然 Tailwind 提供了合理的默认值,但你完全可以通过配置文件自定义设计系统。你可以添加自己的颜色、间距、字体等,让框架完全适应你的设计需求。

通过插件系统,你还可以添加自定义的工具类或组件类,进一步扩展 Tailwind 的功能。这种灵活性让 Tailwind 既强大又可定制。
    `
  },
  {
    id: 3,
    page:"1",
    title: "React Hooks 深度解析",
    author: "王五",
    date: "2024-10-05",
    readTime: "12 分钟",
    summary: "掌握 React Hooks 的核心概念",
    sections: [
      { id: "hooks-intro", title: "Hooks 简介" },
      { id: "useState", title: "useState 详解" },
      { id: "useEffect", title: "useEffect 详解" },
      { id: "custom-hooks", title: "自定义 Hooks" }
    ],
    content: `
# Hooks 简介

React Hooks 是 React 16.8 引入的革命性特性,它让函数组件也能使用状态和其他 React 特性。

在 Hooks 出现之前,如果你想在组件中使用状态或生命周期方法,就必须使用类组件。这导致了代码的复杂性增加,组件难以拆分和复用。

Hooks 解决了这些问题。它让你可以在函数组件中"钩入"React 的特性,比如状态管理、副作用处理、上下文访问等。最重要的是,Hooks 让逻辑复用变得更加简单和直观。

## useState 详解

useState 是最基础也是最常用的 Hook。它让函数组件能够拥有自己的状态。调用 useState 会返回一个数组,包含当前状态值和更新状态的函数。

状态更新可能是异步的,React 会批量处理多个状态更新以优化性能。如果新状态需要基于旧状态计算,应该传递一个函数给状态更新函数,而不是直接传递新值。

useState 可以多次调用来声明多个状态变量。React 通过调用顺序来记住每个状态,这就是为什么 Hooks 必须在组件的顶层调用,不能在条件语句或循环中使用。

## useEffect 详解

useEffect 用于处理副作用,比如数据获取、订阅、手动修改 DOM 等。它在组件渲染后执行,相当于类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合。

依赖数组是 useEffect 的第二个参数,它决定了副作用何时重新执行。如果依赖数组为空,副作用只在组件挂载时执行一次。如果省略依赖数组,副作用会在每次渲染后执行。

清理函数通过在 useEffect 中返回一个函数来定义,它会在组件卸载或副作用重新执行前调用,用于取消订阅、清除定时器等操作。

## 自定义 Hooks

自定义 Hooks 是 Hooks 最强大的特性之一。通过将组件逻辑提取到可复用的函数中,你可以在多个组件之间共享状态逻辑。

自定义 Hook 就是一个以 "use" 开头的函数,它可以调用其他 Hooks。比如,你可以创建一个 useWindowSize Hook 来跟踪窗口大小,或者创建一个 useFetch Hook 来处理数据获取的通用逻辑。

通过组合多个自定义 Hooks,你可以构建出强大而灵活的组件逻辑层,让代码更加模块化和可维护。
    `
  },
  {
    id: 4,
    page:"1",
    title: "React Hooks 深度解析",
    author: "王五",
    date: "2024-10-05",
    readTime: "12 分钟",
    summary: "掌握 React Hooks 的核心概念",
    sections: [
      { id: "hooks-intro", title: "Hooks 简介" },
      { id: "useState", title: "useState 详解" },
      { id: "useEffect", title: "useEffect 详解" },
      { id: "custom-hooks", title: "自定义 Hooks" }
    ],
    content: `
# Hooks 简介

React Hooks 是 React 16.8 引入的革命性特性,它让函数组件也能使用状态和其他 React 特性。

在 Hooks 出现之前,如果你想在组件中使用状态或生命周期方法,就必须使用类组件。这导致了代码的复杂性增加,组件难以拆分和复用。

Hooks 解决了这些问题。它让你可以在函数组件中"钩入"React 的特性,比如状态管理、副作用处理、上下文访问等。最重要的是,Hooks 让逻辑复用变得更加简单和直观。

## useState 详解

useState 是最基础也是最常用的 Hook。它让函数组件能够拥有自己的状态。调用 useState 会返回一个数组,包含当前状态值和更新状态的函数。

状态更新可能是异步的,React 会批量处理多个状态更新以优化性能。如果新状态需要基于旧状态计算,应该传递一个函数给状态更新函数,而不是直接传递新值。

useState 可以多次调用来声明多个状态变量。React 通过调用顺序来记住每个状态,这就是为什么 Hooks 必须在组件的顶层调用,不能在条件语句或循环中使用。

## useEffect 详解

useEffect 用于处理副作用,比如数据获取、订阅、手动修改 DOM 等。它在组件渲染后执行,相当于类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合。

依赖数组是 useEffect 的第二个参数,它决定了副作用何时重新执行。如果依赖数组为空,副作用只在组件挂载时执行一次。如果省略依赖数组,副作用会在每次渲染后执行。

清理函数通过在 useEffect 中返回一个函数来定义,它会在组件卸载或副作用重新执行前调用,用于取消订阅、清除定时器等操作。

## 自定义 Hooks

自定义 Hooks 是 Hooks 最强大的特性之一。通过将组件逻辑提取到可复用的函数中,你可以在多个组件之间共享状态逻辑。

自定义 Hook 就是一个以 "use" 开头的函数,它可以调用其他 Hooks。比如,你可以创建一个 useWindowSize Hook 来跟踪窗口大小,或者创建一个 useFetch Hook 来处理数据获取的通用逻辑。

通过组合多个自定义 Hooks,你可以构建出强大而灵活的组件逻辑层,让代码更加模块化和可维护。
    `
  },
  {
    id: 5,
    page:"1",
    title: "React Hooks 深度解析",
    author: "王五",
    date: "2024-10-05",
    readTime: "12 分钟",
    summary: "掌握 React Hooks 的核心概念",
    sections: [
      { id: "hooks-intro", title: "Hooks 简介" },
      { id: "useState", title: "useState 详解" },
      { id: "useEffect", title: "useEffect 详解" },
      { id: "custom-hooks", title: "自定义 Hooks" }
    ],
    content: `
# Hooks 简介

React Hooks 是 React 16.8 引入的革命性特性,它让函数组件也能使用状态和其他 React 特性。

在 Hooks 出现之前,如果你想在组件中使用状态或生命周期方法,就必须使用类组件。这导致了代码的复杂性增加,组件难以拆分和复用。

Hooks 解决了这些问题。它让你可以在函数组件中"钩入"React 的特性,比如状态管理、副作用处理、上下文访问等。最重要的是,Hooks 让逻辑复用变得更加简单和直观。

## useState 详解

useState 是最基础也是最常用的 Hook。它让函数组件能够拥有自己的状态。调用 useState 会返回一个数组,包含当前状态值和更新状态的函数。

状态更新可能是异步的,React 会批量处理多个状态更新以优化性能。如果新状态需要基于旧状态计算,应该传递一个函数给状态更新函数,而不是直接传递新值。

useState 可以多次调用来声明多个状态变量。React 通过调用顺序来记住每个状态,这就是为什么 Hooks 必须在组件的顶层调用,不能在条件语句或循环中使用。

## useEffect 详解

useEffect 用于处理副作用,比如数据获取、订阅、手动修改 DOM 等。它在组件渲染后执行,相当于类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合。

依赖数组是 useEffect 的第二个参数,它决定了副作用何时重新执行。如果依赖数组为空,副作用只在组件挂载时执行一次。如果省略依赖数组,副作用会在每次渲染后执行。

清理函数通过在 useEffect 中返回一个函数来定义,它会在组件卸载或副作用重新执行前调用,用于取消订阅、清除定时器等操作。

## 自定义 Hooks

自定义 Hooks 是 Hooks 最强大的特性之一。通过将组件逻辑提取到可复用的函数中,你可以在多个组件之间共享状态逻辑。

自定义 Hook 就是一个以 "use" 开头的函数,它可以调用其他 Hooks。比如,你可以创建一个 useWindowSize Hook 来跟踪窗口大小,或者创建一个 useFetch Hook 来处理数据获取的通用逻辑。

通过组合多个自定义 Hooks,你可以构建出强大而灵活的组件逻辑层,让代码更加模块化和可维护。
    `
  }
];