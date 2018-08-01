## 1.s7comm 协议结构与osi7层模型结构对应关系

![img](http://172.16.76.244:2000/static/images/s7_1.png)

## 2.s7comm协议封装

![img](http://172.16.76.244:2000/static/images/s7_2.png)

### 2.1TPKT协议和COTP协议

![img](http://172.16.76.244:2000/static/images/s7_3.png)

第5层TPKT，应用程数据传输协议，介于TCP和COTP协议之间；这是一个传输服务协议主要用来在COTP和TCP之间建立桥梁。

<img src="http://172.16.76.244:2000/static/images/s7_4.png" style="height:80px"></img>

第6层COTP，按照维基百科的解释，COTP 是 OSI 7层协议定义的位于TCP之上的协议。COTP 以“Packet”为基本单位来传输数据，这样接收方会得到与发送方具有相同边界的数据

#### 2.2.1 COTP Connection Packet

![img](http://172.16.76.244:2000/static/images/s7_5.png)

#### 2.2.2 COTP Fuction Packet

![img](http://172.16.76.244:2000/static/images/s7_6.png)



## 3.第七层 S7 communication协议

- S7 communication包含三部分：1-Header；2-Parameter；3 - Data
- <1>Header
  -  01(1 byte): protocol Id: 0x32;
  - 02a(1 byte): ROSCTR: Job (01);
  - 02b(2 byte): redundancy identification (reserved): 0x0000;
  - 2c(2 byte): protocol data unit reference; it’s increased by request event;
  - 2d(2 byte): parameter length - the total length (bytes) of parameter part;
  - 2e(2 byte): data length; 读取PLC内部数据，此处为00 00；对于其他功能，例如：读取CPU的型号，此处为Data部分的数据长度；
- <2>Parameter（读取数据）
  - 3(1 byte): function code: Read Var (0x04)；writeVar (0x05);
  - 4(1 byte): item count;
  - 5(1 byte): variable specification: 0x12;
  - 6(1 byte): length of following address specification – is 7~12length in byte;
  - 7(1 byte): syntax Id: S7ANY (0x10);
  - 8(1 byte):transport size: BYTE(2);
  - 9(2 byte): requested data length;
  - 10(2 byte): DB number; 如果访问的不是DB区域，此处为00 00；
  - 11(1 byte): Area: 0x84= data block(DB); 0X82= outputs(Q); 0x81=inputs(I); 0x83= Flags(M); 0x1d= S7 timers(T); 0x1c= S7counters(C);
  - 12(3 byte):address- start address from zero bit
  - 5~12构成了一个基本的数据请求单元[Item],对多个不同地址区域的数据请求，就是有多个[Item]构成的。
  - Parameter部分的数据结构可以总结为：
  - [Function code ]+ [Item count] + Item[1] + Item[2]  . . . Item[n]
- <3>Data
  -  这一部分与功能有关，例如：读取CPU型号、向CPU存储区写数据；在请求数据报文中此部分不包含任何数据。

## 4.S7Comm以太网通讯过程（以1500PLC为例）

- 计算机与1500PLC进行S7Comm以太网通讯，需经过三个过程：
- <1>“握手”

​               当PC与PLC通过Socket建立链接时，会进行“三次握手”，这是标准的TCP连方式；这个过程会有Socket自动完成；

- <2> 通讯请求

​              在“握手”之后，并不能马上进行数据交换，还需要"通讯请求"过程。这个过程包含两次报文交换：

​                1> PC 发送COTP报文给PLC；在COTP报文中包含“连接请求”和“destination TSAP” - 明确CPU的机架号和槽号；

​                      PLC反馈COTP报文，包含“连接确认”；

​                      这样PLC就清楚了需要和那个CPU来进行数据通讯；

​                2> PC 发送S7Comm报文给PLC；在S7 communicaton报文中包含“通讯请求”；

​                     PLC反馈S7Comm报文。

- <3> 交换数据

​            数据读写就在这个过程内完成。我们可以组织报文来实现我们需要的功能。这个过程内的报文是S7Comm格式；

​            具体实现时，需要对S7Comm中的第5、6、7层进行编程。

​            需要注意的是，如果不进行“第2步-通讯请求”而直接发送交换数据报文，则PLC会将连接断开。





相关链接：

<http://gmiru.com/article/s7comm/>

<http://gmiru.com/article/s7comm-part2/>

<http://www.diangon.com/wenku/plc/ximenzi/201610/00034709.html>  (PLC地址分配）

<http://www.diangon.com/wenku/plc/ximenzi/201610/00034804.html>

<https://www.anquanke.com/post/id/86449>

<https://www.anquanke.com/post/id/86569>