# 问答题

## 什么是定位？一般什么时候使用定位？

定位使元素位置允许一定程度上脱离文档流，调整位置

希望元素相对于浏览器定位 采用fixed

希望元素相对于元素定位 采用absolute

希望元素相对于原来的位置定位 采用 relative

希望元素在位置上进行布局 就采用定位属性

## fixed 定位 和 absolute 定位 有何异同之处？他们是相对什么元素定位的？

fixed 定位相对于浏览器窗口

fixed 定位可以实现顶部导航条效果

absolute 定位相对于父元素中最近的，position属性不是static的元素 或html

在不滚动，absolute相对于html时表现是类似的

## relative 定位中的 top，left，bottom，right 属性是相对什么进行定位的

相对于元素原来会占用的空间，相对应的边组合进行定位

## 对于使用定位重叠后的元素，我们希望他们按照某种顺序排布，需要使用哪个属性？

z-index属性 值越大越靠前