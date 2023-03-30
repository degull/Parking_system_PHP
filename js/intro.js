(function($){

   let Parking = {
      init : function(){
         this.header();
         //this.main();
         //this.footer();
      },

      header : function(){
         const  $serviceCenterBtn =  $('#header .service-center-btn');
         const  $serviceBox       =  $('#header .service-box');
         const  $topTooltip       =  $('#header .top-tooltip');

         // 고객센터 버튼에 마우스 올리면
         $serviceCenterBtn.on({
            mouseenter : function(){
               $topTooltip.show();
            }
         });

         // 해당칸을 마우스가 떠나면
         $serviceBox.on({
            mouseleave: function(){
               $topTooltip.hide();
            }
         });

      },
      
   }


   Parking.init();

})(jQuery);