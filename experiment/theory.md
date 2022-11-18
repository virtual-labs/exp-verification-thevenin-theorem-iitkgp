### Theory
<p>Its provides a mathematical technique for replacing a given network, as viewed from two terminals, by a single voltage source with a series resistance. It makes the solution of complicated networks quite quick and easy. The application of this extremly useful theorem will be explained with the help of following simple example.</p>
<br><figure style="text-align:center">
<img alt="" src="images/pic1.JPG" style="width:400px;height:200px;">
<figcaption>[Fig 1: Circuit with source E and Load R<sub>L</sub>]
</figcaption>
</figure>
<br>
<br>
<p style="text-align: left;">&nbsp;Suppose, it is required to find current flowing through load resistance R<sub>L</sub>, as shown in figure 1.</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">This expression proceed as under:</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">1) Remove R<sub>L</sub> from the circuit terminals A and B and redraw the circuit as shown in figure 2. Obviously, the terminal have become open circuited.</p>
<p style="text-align: left;">&nbsp;</p>
<br><figure style="text-align:center">
<img alt="" src="images/pic2.JPG" style="width:400px;height:200px;">
<figcaption>[Fig 2: Circuit with R<sub>L</sub> removed.]</figcaption>
</figure>
<p style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p>&nbsp;</p>
<p style="text-align: left;">2) Calculate the open circuit Voltages V<sub>O.C. </sub>which appears across terminals A and B when they are open .ie. when R<sub>L</sub> is removed.</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">As seen, V<sub>.O.C.</sub>= drop across R<sub>2</sub>= IR<sub>2</sub> where I is the circuit current when A and B is open.</p>
<p>$$I=\frac{E}{r + R_1+R_2}$$
$$V_{o.c.}= I*R_1$$
$$V_{o.c.} & = \frac{E*R_2}{r + R_1+R_2}$$
</p>
<p>&nbsp;It is also called Thevenin voltage(V<sub>th</sub>).</p>
<p>&nbsp;&nbsp;</p>
<p>3) Now, imagine the battery to be removed from the circuit, leaving its internal resistance r behind and redraw the circuit as shown in figure 3.</p>
<div>&nbsp;</div>
<br><figure style="text-align:center">
<img alt="" src="images/pic3.JPG" style="width:400px;height:200px;">
<figcaption>[Fig 3: Circuit with R<sub>L</sub> and E removed]
</figcaption>
</figure>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>When viewed inwards from the terminals A and B, the circuit consists of two parallel paths: one containing R<sub>2</sub> and another containing (R<sub>1</sub>+r). The equivalent resistance of the network as viewed from these terminals is given as,</p>
<p>$$R_{th}=\frac{(R_1+r)*R_2}{R_1+r+R_2}$$</p><br>
<div>The resistance "R<sub>th</sub>" is also called Thevenin equivalent resistance.</div>
<div>&nbsp;</div>
<div>Consequently , as viewed from terminals A and B, the whole network (excluding R<sub>1</sub>) can be reduced to single source (called thevenin&#039;s source) whose e.m.f equal to V<sub>O.C.</sub> and whose internal reistance equal to R<sub>th</sub> as shown in figure 4. &nbsp;<br>
</div>
<div>&nbsp;</div>
<div>4) R<sub>L</sub> is now connected back across terminals A and B from where it was temporaily removed earlier. Current flowing through R<sub>L</sub> is given by,&nbsp;</div>
<p>$$I_{1}=\frac{V_{th}}{R_{th}+R_L}$$</p><br>
<div>
<br><figure style="text-align:center">
<img alt="" src="images/pic4.JPG" style="width:400px;height:200px;">
<br><figcaption>
 [Fig 4: Thevenin's equivalent circuit]
</figcaption>
</figure>
<br>
<br>
<br>
</p>                            
</div>