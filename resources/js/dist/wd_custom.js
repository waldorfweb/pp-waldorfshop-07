//require(['jQuery'], function ($) {
//$(document).ready(function(){
$(window).on("load", function() {
    $('.widget_kat_description_2').attr('id', 'secondDesc');
    $(':lang(de) .category-description').after('<a href="#secondDesc"><button type="button" data-dismiss="modal" aria-label="weiter"  class="btn btn-outline-primary btn-medium mr-2 weiterlesen"> <i aria-hidden="true" class="fa fa-chevron-right"></i> weiterlesen </button></a>');
    $(':lang(en) .category-description').after('<a href="#secondDesc"><button type="button" data-dismiss="modal" aria-label="weiter"  class="btn btn-outline-primary btn-medium mr-2 weiterlesen"> <i aria-hidden="true" class="fa fa-chevron-right"></i> Continue reading </button></a>');
    $(':lang(nl) .category-description').after('<a href="#secondDesc"><button type="button" data-dismiss="modal" aria-label="weiter"  class="btn btn-outline-primary btn-medium mr-2 weiterlesen"> <i aria-hidden="true" class="fa fa-chevron-right"></i> Lees verder </button></a>');
    $(':lang(fr) .category-description').after('<a href="#secondDesc"><button type="button" data-dismiss="modal" aria-label="weiter"  class="btn btn-outline-primary btn-medium mr-2 weiterlesen"> <i aria-hidden="true" class="fa fa-chevron-right"></i> continuer la lecture </button></a>');
    $(':lang(it) .category-description').after('<a href="#secondDesc"><button type="button" data-dismiss="modal" aria-label="weiter"  class="btn btn-outline-primary btn-medium mr-2 weiterlesen"> <i aria-hidden="true" class="fa fa-chevron-right"></i> Continua a leggere </button></a>');
    $(':lang(es) .category-description').after('<a href="#secondDesc"><button type="button" data-dismiss="modal" aria-label="weiter"  class="btn btn-outline-primary btn-medium mr-2 weiterlesen"> <i aria-hidden="true" class="fa fa-chevron-right"></i> sigue leyendo </button></a>');

    $(".bulletpoints div p:first-child span:empty").parent().parent().parent().hide();

    $('.normalmenu .level2').each(function() {
        $(this).siblings(".level1").addClass('navpfeil');
    });
    $('.megamenu .level1').each(function() {
        $(this).siblings(".level2").addClass('navpfeil');
    });
    $('.megamenu .level2').each(function() {
        $(this).siblings(".level2").addClass('navpfeil');
    });

    //$('.badge').addClass('test');

    $('.page-singleitem .widget_badge .badge span').css('display', 'none');
    $('.page-singleitem .widget_badge .badge span').each(function() {

        if ($(this).text() == 'Handemade') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Handmade.png" alt="Handemade" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Demeter') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Demeter.png" alt="Demeter" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Spielgut') {
            console.log('Spielgut');
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/spielgut_logo.png" alt="Spielgut" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Werkstätten für Menschen mit Behinderung') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/logo_wd_werkstaetten_behindert.png" alt="Werkstätten für Menschen mit Behinderung" height:100%; width:"auto">');
        }
        if ($(this).text() == 'soziale Werkstätten') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Soziale_Werksta_tten.png" alt="Werkstätten für Menschen mit Behinderung" height:100%; width:"auto">');
        }
        if ($(this).text() == 'NEU') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Neu.png" alt="NEU" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Bio') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Bio.png" alt="Bio" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Bio-Siegel') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Bio-EU-Siegel.jpg" alt="Bio" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Katalog Frühjahr `20') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Katlaog.png" alt="Aktueller Katalog" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Katalog') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Katlaog.png" alt="Aktueller Katalog" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Aktueller Katalog') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Katlaog.png" alt="Aktueller Katalog" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Speditionsversand') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/spedition.png" alt="Speditionsversand" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Englisch Sprachig') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/English.png" alt="Englisch Sprachig" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Made in Germany') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Made_in_Germany.png" alt="Made in Germany" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Made in EU') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Made_in_EU.png" alt="Made in EU" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Sperrgut') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/sperrgut.png" alt="Sperrgut" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Bestseller') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/bestseller.png" alt="Bestseller" height:100%; width:"auto">');
        }
        if ($(this).text() == '1tes Jahrsiebt') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Jahrsiebt_1.png" alt="1tes Jahrsiebt" height:100%; width:"auto">');
        }
        if ($(this).text() == '2tes Jahrsiebt') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Jahrsiebt_2.png" alt="2tes Jahrsiebt" height:100%; width:"auto">');
        }
        if ($(this).text() == '3tes Jahrsiebt') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Jahrsiebt_3.png" alt="3tes Jahrsiebt" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Waldorfkind') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/waldorfkind.png" alt="Waldorfkind" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Glutenfrei') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Mogli/badge/MOGLi_glutenfrei_badge.png" alt="Handemade" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Laktosefrei') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Mogli/badge/MOGLi_laktosefrei_badge.png" alt="Demeter" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Vegan') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Mogli/badge/MOGLi_vegan_badge.png" alt="Demeter" height:100%; width:"auto">');
        }
        if ($(this).text() == 'Demeter') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Mogli/Layout/Demeter_Logo.svg" alt="Demeter" height:100%; width:"auto">');
            $(this).addClass('bio-demeter');
            $(this).appendTo('.siegel-cont-1');
        }
        if ($(this).text() == 'Bio-Siegel') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Mogli/Layout/Bio-Siegel-EG-O_ko-VO-Deutschland.svg" alt="Bio EU" height:100%; width:"auto">');
            $(this).addClass('bio-nicht-eu');
            $(this).appendTo('.siegel-cont-2');
        }

        if ($(this).text() == 'EU-Bio-Siegel') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Mogli/Layout/Organic-Logo.svg" alt="Bio EG" height:100%; width:"auto">');
            $(this).addClass('bio-eu');
            $(this).appendTo('.siegel-cont-3');
        }
    });





    //Shipping Method
    //$('#ShippingProfileID267').addClass('selbstabholericon');
    $('img[alt="DHL"]').remove();
    //$('.method-list  .icon').prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Versandicons/selbstabholer.jpg" width="100%">');
    $(".method-list-item[data-id='6'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/DHl_Sammelversand.png" width="100%">');
    $(".method-list-item[data-id='20'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/DHL_Sofort-Teilung.png" width="100%">');
    $(".method-list-item[data-id='7'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Abholer.png" width="100%">');
    $(".method-list-item[data-id='8'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/E-Mail.png" width="100%">');
    $(".method-list-item[data-id='13'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Sperrgut.png" width="100%">');
    $(".method-list-item[data-id='26'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Warensendung-DHL.png" width="100%">');
    $(".method-list-item[data-id='15'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Grossbrief.png" width="100%">');
    $(".method-list-item[data-id='18'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Dialogpost.png" width="100%">');
    $(".method-list-item[data-id='30'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Katlaogversand.png" width="100%">');
    $(".method-list-item[data-id='14'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Spedition.png" width="100%">');
    $(".method-list-item[data-id='19'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/Kostenloser-Versand.png" width="100%">');
    $(".method-list-item[data-id='35'] .icon").prepend('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/versand/DHL-lieferwagen.png" width="100%">');


    //Über Uns Sub-Navigation
    $('.ueber-uns-nav').wrapInner('<div class="category-title"><a href="/ueber-uns/">Über Uns</a></div><ul><li class="nav-item"><a href="/ueber-uns/philosophie/" class="nav-link">Philosophie</a></li><li class="nav-item"><a href="/ueber-uns/unsere-durchdachte-produktauswahl/" class="nav-link">Unsere durchdachte Produktauswahl</a></li><li class="nav-item"><a href="/ueber-uns/waldorfshop-sinnorientiert-in-die-zukunft/" class="nav-link">Genussrechte - Sinnorientiert in die Zukunft</a></li><li class="nav-item active"><a href="/ueber-uns/waldorfshop-gehoert-sich-selbst/" class="nav-link">Waldorfshop gehört sich selbst!</a></li><li class="nav-item"><a href="/ueber-uns/ehrliche-preise/" class="nav-link">Ehrliche Preise</a></li><li class="nav-item"><a href="/ueber-uns/mitarbeiten" class="nav-link">Mitarbeiten</a></li></ul>');

    $('.ueber-uns-nav').parent().parent().parent().parent().addClass('sticky_uu_navigation');

    if (window.location.href.indexOf("waldorfshop-gehoert-sich-selbst") > -1) {
        $('.ueber-uns-nav .nav-item').removeClass('active');
        $('.ueber-uns-nav .nav-item:nth-child(4)').addClass('active');
    }

    if (window.location.href.indexOf("ehrliche-preise") > -1) {
        $('.ueber-uns-nav .nav-item').removeClass('active');
        $('.ueber-uns-nav .nav-item:nth-child(5)').addClass('active');
    }

    if (window.location.href.indexOf("waldorfshop-sinnorientiert-in-die-zukunft") > -1) {
        $('.ueber-uns-nav .nav-item').removeClass('active');
        $('.ueber-uns-nav .nav-item:nth-child(3)').addClass('active');
    }
    if (window.location.href.indexOf("philosophie") > -1) {
        $('.ueber-uns-nav .nav-item').removeClass('active');
        $('.ueber-uns-nav .nav-item:nth-child(1)').addClass('active');
    }
    if (window.location.href.indexOf("unsere-durchdachte-produktauswahl") > -1) {
        $('.ueber-uns-nav .nav-item').removeClass('active');
        $('.ueber-uns-nav .nav-item:nth-child(2)').addClass('active');
    }
    if (window.location.href.indexOf("mitarbeiten") > -1) {
        $('.ueber-uns-nav .nav-item').removeClass('active');
        $('.ueber-uns-nav .nav-item:nth-child(6)').addClass('active');
    }

    $('.category-3236 .ueber-uns-nav .nav-item').removeClass('active');


    //main menü
    $(function() {

        $(".mainmenu li a").each(function() {
            if ($(this).attr("href") == window.location.pathname) {
                $(this).parent().parent().parent().addClass("selected");
            }
        });

    });
});