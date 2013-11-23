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
    },
    events: {
        "click .botonEliminarActualizacion" : "eliminarActualizacion",
        "click .botonEditarActualizacion" : "editarActualizacion",
        "click .botonCancelarActualizacion" : "cancelarActualizacion",
        "click .botonGuardarActualizacion" : "guardarActualizacion"
    },
    eliminarActualizacion:function(){
        this.model.destroy();
    },
    editarActualizacion:function(){
        var parrafoTexto = this.$el.find("#textoActualizaciones");
        var texto = this.model.get("contenido");
        parrafoTexto.replaceWith('<textarea id="textoActualizaciones">' + texto + '</textarea>');
        this.cambiarEstadoBoton(['.botonEliminarActualizacion', '.botonEditarActualizacion', '.botonGuardarActualizacion', '.botonCancelarActualizacion']);
    },
    cancelarActualizacion:function(){
        var parrafoTexto = this.$el.find("#textoActualizaciones");
        var texto = this.model.get("contenido");
        parrafoTexto.replaceWith('<p id="textoActualizaciones">' + texto + '</p>');
        this.cambiarEstadoBoton(['.botonEliminarActualizacion', '.botonEditarActualizacion', '.botonGuardarActualizacion', '.botonCancelarActualizacion']);
    },
    guardarActualizacion:function(){
        var parrafoTexto = this.$el.find("#textoActualizaciones");
        var texto = parrafoTexto.val();
        parrafoTexto.replaceWith('<p id="textoActualizaciones">' + texto + '</p>');

        this.model.set('contenido', texto);
        this.model.save();
    },
    cambiarEstadoBoton:function(botones){
        var self = this;
        botones.forEach(function(boton){
            self.$el.find(boton).toggle();
        })
    }
})