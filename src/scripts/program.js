window.onload = function() {

  function inputs() {

    let inputsDate = document.querySelectorAll('.date-radio');
    let inputsEvent = document.querySelectorAll('.event-radio');
  
    inputsDate.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        
        inputsDate.forEach(element => {
          if (element !== e.target) {
            element.checked = false;
          }
        });
      });
    });
  
    inputsEvent.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        
        inputsEvent.forEach(element => {
          if (element !== e.target) {
            element.checked = false;
          }
        });
      });
    });

  }

  function photosEffects() {
    const photos = document.querySelectorAll('.speaker-photo-md');

    photos.forEach(elem => {

      elem.addEventListener('click', function(e) {
        document.body.insertAdjacentHTML('afterbegin', 
        `
        <div class="modal-speaker modal">
          <div class="modal-container">
            <div class="modal-content col-lg-10 col-xl-8 col-sm-11 col-12 row">
              <div class="col-md-5 col-8 speaker-image__container">
                <img class="speaker-image" src="./src/images/speakers/sp-1.png" alt="">
              </div>
              <div class="col-md-7 col-10 speaker-text">
                <h3 class="speaker-modal-name">Бьянка Лопез</h3>
                <h4 class="speaker-position">Развитие бизнеса и стратегический маркетинг</h4>
                <p class=speaker-review>
                    Бьянка - серийный предприниматель, консультант
                    и спикер в сферах ФинТеха, идентификации и 
                    управления данными. За время своей профессиональной 
                    деятельности в банковской индустрии, Бьянка успела поработать
                      более чем c 40 крупными финансовыми организациями, изменяя их
                      подход к технологиям с помощью новых возможностей идентификации.<br />
                    Ранее Бьянка работала директором по идентификации 
                    ведущей биометрической компании BioConnect, где отвечала
                    за управление продуктами, маркетинг и развитие
                      бизнеса и серьезно увлеклась темой биометрии. <br />
                    Благодаря своему предпринимательскому подходу
                    к решению задач индустрии, в 2017/2018 гг. 
                    Бьянка вошла в список Toп 40 Digital Influencer
                      in Finance по версии Thomson Reuters и в 2018-2019
                      гг. в Топ 100 Influencers in Identity по версии OWI (1WorldIdentity).
                </p>
                <a class="speaker-link" href="#" target="_blank"><span>FinTech Day / Forum</span></a>
              </div>
      
              <img class="close" id="close-speaker" src="./src/images/close-black.png">
            </div>
          </div>
        </div>
        `);
        document.querySelector('.modal-speaker').style.display = 'block';
        
        document.querySelector('.modal-speaker').addEventListener('click', function check(e) {
          console.log(e.target);
          if (e.target === document.querySelector('.modal-container')
           || e.target === document.querySelector('#close-speaker')) {
            document.querySelector('.modal-speaker').removeEventListener('click', check);
            document.querySelector('.modal-speaker').style.display = 'none';
            document.body.querySelector('.modal-speaker').remove();
           }
        });

      });

      elem.addEventListener('mouseover', function(e) {
        this.insertAdjacentHTML('beforeend',
        `
          <div class="speaker-modal-sm">
            <h3 class="speaker-name">Sanya Sanya</h3>
            <p class="speaker-review">Radiofizik</p>
            <div class="triangle">
            </div>
          </div>
        `);
      });

      elem.addEventListener('mouseout', function(e) {
        this.querySelector('.speaker-modal-sm').remove();
      });

    });
  }

  function eventModal() {

    let buttonInner = null;

    if (document.querySelector('.language').value === 'RU') buttonInner = 'Купить билет';
    else buttonInner = 'Buy ticket';

    const triggersList = document.querySelectorAll('#event-name');

    triggersList.forEach(elem => {
      elem.addEventListener('click', function(e) {
        document.body.insertAdjacentHTML('afterbegin', 
        `
          <div class="modal-event modal">
            <div class="modal-container">
              <div class="modal-content col-lg-10 col-xl-8 col-sm-11 col-12 row">   
                <div class="col-12">
                  <h2 class="modal-event-title">${this.textContent}</h2> 
                  <p class="modal-event-text-paragraph">
                    <span class="bold-text">${this.textContent}</span> 
                    — это новая технологичная индустрия экономики.  
                    Это — компании, которые предоставляют технологии, позволяющие 
                    совершать финансовые сделки гораздо быстрее и проще.
                    Взаимное кредитование, небанковские кредиты, вклады, 
                    бухгалтерия, личные финансы, индивидуальные инвестиции,
                    краудфандинг, платежи, финансовые исследования, 
                    криптовалюта – все это включает в себя FinTech.
                  </p>
                </div>

                <div class="col-12">
                  <p class="bold-text modal-event-text-paragraph">
                  Кому будет интересно: 
                  </p>
                  <ul>

                    <li class="modal-event-item">
                      Представителям компаний, которые используют fintech решения в своем бизнесе
                    </li>

                    <li class="modal-event-item">
                      Представителям малого и среднего бизнеса, которые 
                      хотят разобраться в самой прорывной сфере 
                      развития технологий и использовать fintech решения, 
                      чтобы улучшить собственный бизнес.
                    </li>

                    <li class="modal-event-item">
                      Всем, у кого есть биткойны либо другая криптовалюта.
                    </li>

                  </ul>        
                
                  <p class="bold-text modal-event-text-paragraph">
                  Кому быть обязательно:
                  </p>
                  <ul>

                    <li class="modal-event-item">
                    Представителям компаний, которые работают в области fintech;
                    </li>

                    <li class="modal-event-item">
                    Представителям банков (для вас будет много новой и очень важной информации).
                    </li>

                  </ul>
                                
                  <div class="modal-event-button__container">
                    <a class="button orange modal-event-button" href="./tickets.html">${buttonInner}</a>
                  </div>
                </div>

                <img class="close" id="close-event" src="./src/images/close-black.png">
              </div>
            </div>
          </div>
        `);
        document.querySelector('.modal-event').style.display = 'block';
        
        document.querySelector('.modal-event').addEventListener('click', function check(e) {

          if (e.target === document.querySelector('.modal-container')
           || e.target === document.querySelector('#close-event')) {
            document.querySelector('.modal-event').removeEventListener('click', check);
            document.querySelector('.modal-event').style.display = 'none';
            document.body.querySelector('.modal-event').remove();
           }
        });
      });
    });
  }

  function showAdjacent() {
    const triggersList = document.querySelectorAll('.card-checkbox');

    triggersList.forEach(elem => {
      elem.addEventListener('click', function(e) {
        let els = [];
        while (elem) {
          if (elem.classList.contains('card-item')) {
            let details = null;

            if (elem.querySelector('.card-adjacent').classList.contains('adjacent-show')) {

              if (document.querySelector('.language').value === 'RU') details = 'Показать детали';
              else details = 'Show details';

              this.innerHTML = `<span>${details}</span> <img src="./src/images/card-checkbox-bottom.png">`;
              elem.querySelector('.card-adjacent').classList.remove('adjacent-show');

              return ;
            }

            elem.querySelector('.card-adjacent').classList.add('adjacent-show');

            if (document.querySelector('.language').value === 'RU') details = 'Скрыть детали';
            else details = 'Hide details';

            this.innerHTML = `<span>${details}</span> <img src="./src/images/card-checkbox-top.png">`;

            return ;
        }
    
        els.unshift(elem);
        elem = elem.parentNode;
        }
      });
    });
  }

  function dropDown() {
    let width = window.innerWidth;

    if (width > 768) return;
    const triggers = document.querySelectorAll('.dropdown-trigger');

    triggers.forEach(elem => {
      elem.addEventListener('click', function(e) {
        let list = this.parentNode.querySelector('.dropdown');

        if (list.classList.contains('active')) {
          elem.classList.remove('triggered');
          list.classList.remove('active');
          return ;
        }

        elem.classList.add('triggered');
        list.classList.add('active');
      });
    });
  }

  inputs();
  photosEffects();
  eventModal();
  showAdjacent();
  dropDown();

  window.onresize = () => dropDown();
}

$(window).ready(function() {
  $('select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

  $(".popup-menu").click(function () {
    $(".modal-menu").fadeToggle('fast');
  });

  $(".modal-menu").bind("click", function (e) {
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close' ||
        $(e.target).attr('class') === 'modal-link') {
      $(".modal").fadeOut('fast');
    }
  });
});