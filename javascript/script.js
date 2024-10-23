let lastMessage = 0
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');
    let plusValue = 0;

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - (96 + plusValue);
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    document.getElementById('notification-banner').style.display = 'block';
    plusValue = 80;
    // Lida com a permissão de notificações
    document.getElementById('allow-notifications').onclick = function() {
        Notification.requestPermission().then(function(result) {
        });
        document.getElementById('notification-banner').style.display = 'none';
        plusValue = 0;
    };

    document.getElementById('deny-notifications').onclick = function() {
        document.getElementById('notification-banner').style.display = 'none';
        plusValue = 0;
    };

    $('.chat-container').on('click', function() {
        $(this).toggleClass('active');
        $('.chat-box-container').toggleClass('active');

    })

    $('.chat-box-close').on('click', function() {
        $('.chat-container').toggleClass('active');
        $('.chat-box-container').toggleClass('active');
    })

    $('.send').on('click', function() {
        let message = $('input[name="message"]');
        if(message.val() === '') return
        console.log(lastMessage)
        $('.chat-box-content').append('<div class="chat-box-message">' + '<p class="user-message-sent">' + message.val() + '</p>'  + '</div>');
        switch (message.val()) {
            case '1':
                $('.chat-box-content').append('<div class="chat-box-message">' + '<p class="chat-message-sent">' + 'Nos chame no whatsapp' + '<br>' + '(99) 99966-9966' + '</p>'  + '</div>');
                break;
            case '2':
                $('.chat-box-content').append('<div class="chat-box-message">' + '<p class="chat-message-sent">' + 'Mande seu curriculo em pdf no email:' + '<br>' + 'fruttibox@gmail.com' + '</p>'  + '</div>');
                break;
            case '3':
                $('.chat-box-content').append('<div class="chat-box-message">' + '<p class="chat-message-sent">' + 'Fique a vontade, seu feedback é muito importante para nós!' + '</p>'  + '</div>');
                break;
            default:
                if(lastMessage === '3') {
                    $('.chat-box-content').append('<div class="chat-box-message">' + '<p class="chat-message-sent">' + 'Muito obrigado pelo seu feedback!' + '</p>'  + '</div>');
                    break
                }
                $('.chat-box-content').append('<div class="chat-box-message">' + '<p class="chat-message-sent">' + 'Desculpe, não entendi.' + '</p>'  + '</div>');
        }
        lastMessage = message.val();
        message.val('');
    })
});

// como posso te ajudar?
// 1 - Quero fazer um pedido
// 2 - Quero fazer uma reclamação
// 3 - Quero mandar um curriculo

// 1 - chame a genteno whatsapp
// 2 - poxa que pena me diga o que aconteceu
// 3 - mande um email para blabla@ no formato pdf