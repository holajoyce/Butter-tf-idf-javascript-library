# tf-idf in JavaScript

This is useful for looking at the top (most frequent words on a webpage)

This library has optimized for cooking recipes sites. 


* a script to remove stopwords http://tedserbinski.com/files/stopwords.js.txt 
* jquery https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
* underscoreJS http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js 

* ported from my python tf-idf library which was by TimTrueman w/ nltk https://github.com/spatzle/tf-idf

* stemmer - http://qaa.ath.cx/porter_js_demo.html
* sorting an object - http://wolfram.kriesing.de/blog/index.php/2008/javascript-sort-object-by-a-value
* stopwords library - http://tedserbinski.com/files/stopwords.js.txt

Add this to your webpage (change the library paths acorddingly)

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  	<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script>
  	<script src="../lib/stopwords.js"></script>
  	<script src="../lib/tfidf.js"></script>
  	<script src="../lib/tokenize.js"></script>
  	<script src="../lib/corpus_tools.js"></script>
  	<script src="../lib/collections_tools.js"></script>
  	<script src="../lib/stemmer-min.js"></script>
  	<script src="../test_data/test_data.js"></script>
  	<script>
    	var analyze_web_text = function(corpus){
        tfidfs = tfidf_corpus(prepare_docs(prepare_corpus(corpus)));
        s = sortObj(tfidfs);
        return s;
    	}
  		$(function() {
        	var corpus  = document.title+". "+$('#ingredients').text()+". "+$('#preparation').text()+". "+$('body p').text()+". "+$('#nutritional_information').text();
        	alert(analyze_web_text(corpus));
    	});
  </script>


## TODO

create a GreaseMonkey / Chrome Extension