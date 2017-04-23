/**
 * Created by tiantan on 2017/1/17.
 */
(function () {
  angular
    .module("angularJsdemo")

    .directive("jqdatepicker", function () {
      return{
        restrict:'EA',
        require:"?^ngModel",
        link: function (scope, element, attr,ngModelContro) {
          $(element).datepicker({
            inline: true,
            showButtonPanel:true,
            currentText:'Today',
            closeText:'Clear',
            dateFormat: 'yy-mm-dd',
            onSelect: function (date) {
              scope.pickData=date;
              scope.$apply(function () {
                ngModelContro.$setViewValue(date);
              })
            }
          });
          $.datepicker._gotoToday = function (id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
              inst.selectedDay = inst.currentDay;
              inst.drawMonth = inst.selectedMonth = inst.currentMonth;
              inst.drawYear = inst.selectedYear = inst.currentYear;
            }
            else {
              var date = new Date();
              inst.selectedDay = date.getDate();
              inst.drawMonth = inst.selectedMonth = date.getMonth();
              inst.drawYear = inst.selectedYear = date.getFullYear();
              this._setDateDatepicker(target, date);
              this._selectDate(id, this._getDateDatepicker(target));
            }
            this._notifyChange(inst);
            this._adjustDate(target);
          };
        }
      }
    })
})()
