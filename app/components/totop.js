import React from 'react'
import '../style/totop.less'

let Totop = React.createClass({
    componentDidMount(){
        //toTop control and bar control
        const $toTop = $('.toTop');
        const $bar=$("nav");
        let	$backToTop = function () {
            const docS = $(document).scrollTop(),winH = $(window).height();
            (docS > 300) ? $toTop.fadeIn('slow'): $toTop.fadeOut('slow');
            (docS > 500) ? $bar.fadeOut('slow'): $bar.fadeIn('slow');
            if(!window.XMLHttpRequest) {
                $toTop.css("top", docS + winH - 166);
            }
        };
        $toTop.click( function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });
        $toTop.hide();
        $backToTop();
        $(window).bind("scroll", $backToTop);
    },
    render(){
        return(
            <div className='toTop' style={{opacity: 1}} title="返回顶部">
                <span className="glyphicon glyphicon-chevron-up"> </span>
            </div>
        );
    }
});

export default Totop;