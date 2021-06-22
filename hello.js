// this  is the basic format of html

/*1.
<!DOCTYPE html>  //it means document type is in html format //<>(this is start tag) and </>(this is end tag) e.g:<head> </head>
<html>
    <head>
        <!--data-->
        <title>
         <!--data-->
        </title>
    </head>
    <body>
        <!--data-->
        <p>
         <!--data--> 
        </p>
    </body>
</html>
*/

//html has two parts head and body.head is defined as <head> </head> and body is defined as <body> </body>
//head and body are two different entities of html page and hence they are seperated
//P is a paragraph and it is written as <p> </p>
//title is written as <title> </title>

/*2.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>    welcome page is head  and Hello World is body
    </head>
    <body>
        <p>Hello world</p>               
    </body>
</html>
*/

/*3.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
    </body>
</html>
*/

/*4.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
        <h1>HEADING 1</h1>            //h1 and h6 are heading and it is written inside open tag(<>) and close tag(</>) like  <h1> </h1>
        <p>Hello world</p>            //heading ranges from h1 to h6
        <p>Hello world</p>            //h1 is used for biggest heading size and h6 is used for smallest heading size
        <p>Hello world</p>            //the size decreases as we move from h1 to h6
        <H6>HEADING 6</H6>            //if we use <p1> and <p2> instead of p for paragraph,output will be same
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
    </body>
</html>
*/


/*5.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
        <h1>HEADING 1</h1>
        <p>Hello world <br> Hello world <br> Hello world</p> //<br> is used to break the data in multiple lines and br does not requires closing tag
        <H6>HEADING 6</H6>
        <p>Hello world <br> Hello world <br> Hello world</p>
    </body>
</html>
*/

/*6.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
        <h1>HEADING 1</h1>
        <p>Hello world <br> Hello world <br> Hello world</p>
        <H6>HEADING 6</H6>
        <p>Hello world <br> Hello world <br> Hello world</p>
        <a href="http://www.google.com">Google web page</a>      // href means refer to some part of the code or doc
    </body>
</html>
*/

//a tag:- 
//The HTML <a> tag is used for creating element (also known as an "anchor" element). 
//The a element represents a hyperlink. 
//hyperlink means there is some text written over the page and if you click on that text that link will get open
//This is usually a link to another document. 
//You can use the <a> tag to link text or images or any url.


//basics of html

//element consist of start tag(<>)(attributes)+Text/content+end tag(</>)
//attribute further defines about element
//<font size = "30"> Hello </font>
//here,
//font is tag
//size = "30" means attribute name = attribute value that means size is the attribute name and 30 is the attribute value 
//Hello means content/text/data
//</font> is the end of font tag
//and the whole line  <font size = "30"> Hello </font> is element

/*7.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
        <h1>HEADING 1</h1>
        <p>Hello world <br> Hello world <br> Hello world</p>
        <H6>HEADING 6</H6>
        <p>Hello world <br> Hello world <br> Hello world</p>
        <a href="http://www.google.com">Google web page</a>
        <img src="C:\Users\hp\Desktop\download.png" height="500" width="500"> //img means image and scr means path of image and C:\Users\hp\Desktop\download.png is the path assigned to src
        </body>
</html>
*/

//here,
//The src attribute specifies the location (URL) of the external resource.
//The <img> tag is used to embed an image in an HTML page.
//Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.
//The <img> tag has two required attributes:
//src - Specifies the path to the image
//alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed
//height and width attribute are used to determine the size of the image and 500,500 are the values of attribute respectively

/*8.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
        <h1>HEADING 1</h1>
        <p>Hello world <br> Hello world <br> Hello world</p>
        <H6>HEADING 6</H6>
        <p>Hello world <br> Hello world <br> Hello world</p>
        <a href="http://www.google.com">Google web page</a>
        <img src="C:\Users\hp\Desktop\downloa.png" height="100" width="100" alt="here we have downloaded image">
        </body>
</html>
*/

/*9.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body style="background-color: black">
        <h1>HEADING 1</h1>
        <p style="color: darkkhaki">Hello world <br> Hello world <br> Hello world</p>
        <H6>HEADING 6</H6>
        <p style="color: darkorange">Hello world <br> Hello world <br> Hello world</p>
        <a href="http://www.google.com">Google web page</a>
        <img src="C:\Users\hp\Desktop\download.png" height="100" width="100" alt="here we have downloaded image">
        </body>
</html>
*/

//style is used to change font colour and background colour

/*10.
<!DOCTYPE html>
<html>
    <head>
        <title> Welcome page</title>
    </head>
    <body>
    <table>

        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Gaurav</td>
            <td>Mishra</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Harsh</td>
            <td>Mishra</td>
            <td>19</td>
        </tr>
        <tr>
            <td>Yash</td>
            <td>Patole</td>
            <td>18</td>
        </tr>
        <tr>
            <td>Aditya</td>
            <td>Jadhav</td>
            <td>19</td>
        </tr>
    </table> 
    </body>
</html>
*/

//here,
//<th>	Defines a header cell in a table
//<tr>	Defines a row in a table
//<td>	Defines a cell in a table

/*11.
<!DOCTYPE html>
<html>
    <head> 
        <style>                      //here style is applied to table,th,td 
            table,th,td{                       
            border: 1px solid black;
            border-collapse: collapse;
            }
            td{                   //here style is applied to td
                padding: 15px;
            }
            table{                 //here style is applied to table
                width: 100%;
            }
            th,td{                   //here style is applied to th,td
                text-align: center;
            }
        </style>
        <title> Welcome page</title>
    </head>
    <body>
    <table>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Gaurav</td>
            <td>Mishra</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Harsh</td>
            <td>Mishra</td>
            <td>19</td>
        </tr>
        <tr>
            <td>Yash</td>
            <td>Patole</td>
            <td>18</td>
        </tr>
        <tr>
            <td>Aditya</td>
            <td>Jadhav</td>
            <td>19</td>
        </tr>
    </table> 
    </body>
</html>
*/

//here,
//To specify table borders in CSS, use the border property and we use border: 1px solid black; to create border and specifies its color
//it will create whole table with two line border and collapse will merge it into single line
//The border-collapse property sets whether table borders should collapse into a single border or be separated as in standard HTML
//Borders are collapsed into a single border when possible
//padding is used to increase table border from given data or content or text and 15px is value of padding and it expands table 15px from given text or content
//width is used to expand table size and 100% is the value of width to be expanded and it will expand on whole page as its value is 100% 
//text-align aligns text or content in center,left and right




/*12.

<!DOCTYPE html>
<html>
    <head>
        <style>
            table,th, td{
                border: 1px solid black;
                border-collapse: collapse;
            }
            td{
                padding: 15px;
            }
            table{
                width: 100%;
            }
            th,td{
                text-align: center;
            }
        </style>
        <title> Welcome page</title>
    </head>
    <body>
    <table>
        <tr>
            <th colspan="2">Name</th>
           
            <th>Age</th>
        </tr>
        <tr>
            <td>Gaurav</td>
            <td>Mishra</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Harsh</td>
            <td>Mishra</td>
            <td>19</td>
        </tr>
        <tr>
            <td>Yash</td>
            <td>Patole</td>
            <td>18</td>
        </tr>
        <tr>
            <td>Aditya</td>
            <td>Jadhav</td>
            <td>19</td>
        </tr>
    </table> 
    <br> <br> <br> <br>
    <table>
        <tr>
            <th>FirstName</th>
             <td>Gaurav</td>
        </tr>
        <tr>
            <th rowspan="2">Name</th>
            <td>Harsh</td>
          
        </tr>
        <tr>
            <td>Mishra</td>
        </tr>
        </table> 
</body>
</html>
*/

//here,
//colspan="2" means that given column will acquire space of two columns
//rowpan="2" means that given row will acquire space of two rows
//br tag is used to split data into multiple lines 
