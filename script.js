$(function() {
    $("#draggable").draggable({
        helper: 'clone',
        revert: 'invalid'
    });

    $("#drag-zone").droppable({
        drop: function(event, ui) {
            if (!$(ui.draggable).hasClass('cloned')) {
                var $clone = $("<textarea>", { class: "draggable cloned", rows: "4", cols: "20", text: "Drop here to duplicate" });
                $(this).append($clone);

                // Calculamos la posición relativa al contenedor drop-zone
                var dropZoneOffset = $(this).offset();
                var relativeLeft = ui.offset.left - dropZoneOffset.left;
                var relativeTop = ui.offset.top - dropZoneOffset.top;

                $clone.css({ position: 'absolute', left: relativeLeft, top: relativeTop });
                $clone.draggable();
            }
        }
    });
});
