import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  isLogged = false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('email') == 'presi'){
      this.isLogged = true;
    }
    var items = document.querySelectorAll('.filter-sections div');
    animate(items);

    // filter on click
    each('.filter-links li a', function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        filterLinks(el);
      });
    });

    // filter links functions
    function filterLinks(element) {
      // get text 
      var el = element.className,
        // convert to lowercase
        linksTolowerCase = el.toLowerCase();
      console.log(element)
      // if all remove all elements
      if (el === 'all') {
        // first show all view class
        each('.view', function (e) {
          e.classList.remove('view');
        });
        // no show init animation
        animate(items);
      } else {
        // if not click all remove all elements
        each('.view', function (e) {

          e.classList.remove('view');
        });
      }
      // show animation for current elements
      animate(document.querySelectorAll('.' + linksTolowerCase));
    };
    // forech arrays
    function each(el, callback) {
      console.log(el)
      var allDivs = document.querySelectorAll(el),
        alltoArr = Array.prototype.slice.call(allDivs);
      Array.prototype.forEach.call(alltoArr, function (selector, index) {
        if (callback) return callback(selector);
      });
    };
    // animate function
    function animate(item) {
      (function show(counter) {
        setTimeout(function () {
          item[counter].classList.add('view');
          counter++;
          if (counter < item.length) show(counter);
        }, 50);
      })(0);
    };
    //Section one

    var span = document.getElementsByClassName('close')[0];
    var buttontoClose = document.getElementById('close-button');
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('one');

    btn.onclick = function () {
      modal.style.display = 'block';
    }
    buttontoClose.onclick = function () {
      modal.style.display = 'none';
    }

    span.addEventListener('click', function () {
      modal.style.display = 'none';
    })

    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    })

    //Section two
    var modal2 = document.getElementById('myModal2');
    var btn2 = document.getElementById('two');
    var span2 = document.getElementsByClassName('close')[1];
    var buttontoClose2 = document.getElementById('close-button2');

    btn2.onclick = function () {
      modal2.style.display = 'block';
    }
    span2.addEventListener('click', function () {
      modal2.style.display = 'none';
    })
    buttontoClose2.onclick = function () {
      modal2.style.display = 'none';
    }
    window.addEventListener('click', function (event) {
      if (event.target == modal2) {
        modal2.style.display = 'none';
      }
    })


    //Section three
    var modal3 = document.getElementById('myModal3');
    var btn3 = document.getElementById('three');
    var span3 = document.getElementsByClassName('close')[2];
    var buttontoClose3 = document.getElementById('close-button3');

    btn3.onclick = function () {
      modal3.style.display = 'block';
    };
    span3.addEventListener('click', function () {
      modal3.style.display = 'none';
    });
    buttontoClose3.onclick = function () {
      modal3.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal3) {
        modal3.style.display = 'none';
      }
    });

    //Section four
    var modal4 = document.getElementById('myModal4');
    var btn4 = document.getElementById('four');
    var span4 = document.getElementsByClassName('close')[3];
    var buttontoClose4 = document.getElementById('close-button4');


    btn4.onclick = function () {
      modal4.style.display = 'block';
    };
    span4.addEventListener('click', function () {
      modal4.style.display = 'none';
    });
    buttontoClose4.onclick = function () {
      modal4.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal4) {
        modal4.style.display = 'none';
      }
    });

    //Section five

    var modal5 = document.getElementById('myModal5');
    var btn5 = document.getElementById('five');
    var span5 = document.getElementsByClassName('close')[4];
    var buttontoClose5 = document.getElementById('close-button5');


    btn5.onclick = function () {
      modal5.style.display = 'block';
    };
    span5.addEventListener('click', function () {
      modal5.style.display = 'none';
    });
    buttontoClose5.onclick = function () {
      modal5.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal5) {
        modal5.style.display = 'none';
      }
    });

    //Section six

    var modal6 = document.getElementById('myModal6');
    var btn6 = document.getElementById('six');
    var span6 = document.getElementsByClassName('close')[5];
    var buttontoClose6 = document.getElementById('close-button6');


    btn6.onclick = function () {
      modal6.style.display = 'block';
    };
    span6.addEventListener('click', function () {
      modal6.style.display = 'none';
    });
    buttontoClose6.onclick = function () {
      modal6.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal6) {
        modal6.style.display = 'none';
      }
    });

    //Section seven

    var modal7 = document.getElementById('myModal7');
    var btn7 = document.getElementById('seven');
    var span7 = document.getElementsByClassName('close')[6];
    var buttontoClose7 = document.getElementById('close-button7');


    btn7.onclick = function () {
      modal7.style.display = 'block';
    };
    span7.addEventListener('click', function () {
      modal7.style.display = 'none';
    });
    buttontoClose7.onclick = function () {
      modal7.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal7) {
        modal7.style.display = 'none';
      }
    });


    //Section eight

    var modal8 = document.getElementById('myModal8');
    var btn8 = document.getElementById('eight');
    var span8 = document.getElementsByClassName('close')[7];
    var buttontoClose8 = document.getElementById('close-button8');


    btn8.onclick = function () {
      modal8.style.display = 'block';
    };
    span8.addEventListener('click', function () {
      modal8.style.display = 'none';
    });
    buttontoClose8.onclick = function () {
      modal8.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal8) {
        modal8.style.display = 'none';
      }
    });



    //Section nine
    var modal9 = document.getElementById('myModal9');
    var btn9 = document.getElementById('nine');
    var span9 = document.getElementsByClassName('close')[8];
    var buttontoClose9 = document.getElementById('close-button9');


    btn9.onclick = function () {
      modal9.style.display = 'block';
    };
    span9.addEventListener('click', function () {
      modal9.style.display = 'none';
    });
    buttontoClose9.onclick = function () {
      modal9.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal9) {
        modal9.style.display = 'none';
      }
    });


    //Section ten
    var modal10 = document.getElementById('myModal10');
    var btn10 = document.getElementById('ten');
    var span10 = document.getElementsByClassName('close')[9];
    var buttontoClose10 = document.getElementById('close-button10');


    btn10.onclick = function () {
      modal10.style.display = 'block';
    };
    span10.addEventListener('click', function () {
      modal10.style.display = 'none';
    });
    buttontoClose10.onclick = function () {
      modal10.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal10) {
        modal10.style.display = 'none';
      }
    });


    //Section eleven
    var modal11 = document.getElementById('myModal11');
    var btn11 = document.getElementById('eleven');
    var span11 = document.getElementsByClassName('close')[10];
    var buttontoClose11 = document.getElementById('close-button11');

    btn11.onclick = function () {
      modal11.style.display = 'block';
    };
    span11.addEventListener('click', function () {
      modal11.style.display = 'none';
    });
    buttontoClose11.onclick = function () {
      modal11.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal11) {
        modal11.style.display = 'none';
      }
    });

//Section twelve
    var modal12 = document.getElementById('myModal12');
    var btn12 = document.getElementById('twelve');
    var span12 = document.getElementsByClassName('close')[11];
    var buttontoClose12 = document.getElementById('close-button12');


    btn12.onclick = function () {
      modal12.style.display = 'block';
    };
    span12.addEventListener('click', function () {
      modal12.style.display = 'none';
    });
    buttontoClose12.onclick = function () {
      modal12.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal12) {
        modal12.style.display = 'none';
      }
    });

    //Section thirdtheen
    var modal13 = document.getElementById('myModal13');
    var btn13 = document.getElementById('thirdteen');
    var span13 = document.getElementsByClassName('close')[12];
    var buttontoClose13 = document.getElementById('close-button13');


    btn13.onclick = function () {
      modal13.style.display = 'block';
    };
    span13.addEventListener('click', function () {
      modal13.style.display = 'none';
    });
    buttontoClose13.onclick = function () {
      modal13.style.display = 'none';
    };
    window.addEventListener('click', function (event) {
      if (event.target == modal13) {
        modal13.style.display = 'none';
      }
    });

  }

  clicks(event){
    if(event.target.id == 'testing'){
      document.getElementById('testing').style.pointerEvents = 'none';
      document.getElementById('testing').style.borderBottom = '1px solid white';
      document.getElementById('allofthem').style.pointerEvents = 'auto';
      document.getElementById('allofthem').style.borderBottom = '0px';
      document.getElementById('forsale').style.pointerEvents = 'auto';
      document.getElementById('forsale').style.borderBottom = '0px';
    } else if (event.target.id == 'allofthem'){
      document.getElementById('allofthem').style.pointerEvents = 'none';
      document.getElementById('allofthem').style.borderBottom = '1px solid white';
      document.getElementById('testing').style.pointerEvents = 'auto';
      document.getElementById('testing').style.borderBottom = '0px';
      document.getElementById('forsale').style.pointerEvents = 'auto';
      document.getElementById('forsale').style.borderBottom = '0px';
    } else if (event.target.id == 'forsale'){
      document.getElementById('forsale').style.pointerEvents = 'none';
      document.getElementById('forsale').style.borderBottom = '1px solid white';
      document.getElementById('allofthem').style.pointerEvents = 'auto';
      document.getElementById('allofthem').style.borderBottom = '0px';
      document.getElementById('testing').style.pointerEvents = 'auto';
      document.getElementById('testing').style.borderBottom = '0px';
    }
  }
  
}
