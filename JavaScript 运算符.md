#问答题
##什么叫一元运算符？什么叫二元操作符？其中的一元 二元各是代表着什么？
运算符需要一个参数的叫做一元运算符

需要两个参数的叫二元运算符

一元和二元表示参与运算的表达式数量
##如何删除一个对象的属性？
采用delete关键字
delete obj.name
##前增量/前减量 与 后增量/后减量 有何异同？
都会导致变量的值发生变化

但前增量表示先计算变化，后使用其值

后增量表示先使用值，再进行变化
##什么是位运算？JavaScript 中有哪些位运算？
位运算符是针对32位bit变量进行运算的运算符

not 按位取反 ~ 将会反转比特位

and 与 & 对比两个数据的比特位，按位相与

or 或 | 按位相或

xor ^ 异或 按位异或

<< 左移运算

'>>' 有符号右移运算

`>>>` 无符号右移
##如何计算一个数的二进制表示？
有符号正数数 采用toString 以2为基

有符号负数数采用 负数>>>0 之后 toString 以2 为基
##负整数在计算机中是如何表示的？如何将一个正数转化为其相反数？
以二进制补码表示，第32位为1 表示负数

先得到正数的二进制，按位取反，再加1
##位运算 AND 和 位运算 OR 结果各是什么？有何不同？
AND:

    1 1 >1
    1 0 >0
    0 1 >0
    0 0 >0

OR:
    
    1 1 > 1
    1 0 > 1
    0 1 > 1 
    0 0 > 0

AND 当两个位都为1时才输出1 OR只要有一个1就可以输出1


##对一个数 左移运算 和 右移运算 各等价于乘法中的什么？
左移n 位相当于 乘2的n次方

右移n 位相当于 取模2的n次方

##逻辑运算和位运算有何异同？

相同点:采用相同的逻辑运算规律

不同点：逻辑运算只有 与 或 非 且输入输出都是一位 true 或者 false
##如何计算 a 除以 b 的余数？
a%b
##JavaScript 中 = 与 == 含义相同吗？请详细说明
不相等 = 是赋值运算符 可以给一个变量赋值，改变值，声明初始值

== 是条件运算符的值相等判定 当且仅当两个运算数相等时 返回true 否则返回false
##== 与 === 有何异同？
== 在判定之前会进行自动类型转换

=== 则不自动进行类型转换，如果值要相等至少类型得相等

##什么叫变量等价的逻辑值？如何查看任意变量等价的逻辑值？

# 代码题

1. false 因为当与计算时第一个条件不满足，就不再执行后边的语句

2. false 因为 undefined null 和字符串都等价于 false

3. 3 1 逗号等级比较低