/**
 * Created with JetBrains RubyMine.
 * User: adi
 * Date: 16/11/13
 * Time: 15:54
 * To change this template use File | Settings | File Templates.
 */
var ActualizacionView = Backbone.View.extend({
    formulario: Mustache.compile($('#viewActualizacion').html()),
    render: function(){
        this.$el.html(this.formulario(this.model.toJSON()))
        return this;
    }
})