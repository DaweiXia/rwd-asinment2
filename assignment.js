Handlebars.registerPartial('animalInfo',
	'<div class="row">{{#each animals}}<div class="col-xs-6 col-md-3"><div class="thumbnail">'
	+'<a href="#" data-toggle="modal" data-target="#{{animalName name}}"><img src="{{image1}}" alt="A {{name}}" /></a>'
	+'<h4>{{name}}</h4></div></div>'
	+'<div class="modal" id="{{animalName name}}" tabindex="-1" role="dialog"><div class="modal-dialog">'
	+'<div class="modal-content"><div class="modal-header">'
	+'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
	+'<span aria-hidden="true">&times;</span></button><h4 class="modal-title">{{name}}</h4></div>'
	+'<div class="modal-body"><div class="thumbnail"><img src="{{image2}}" alt="A {{name}}" /></div>'
	+'<p>{{description}}</p></div><div class="modal-footer">'
	+'<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'
	+'</div></div></div></div>{{/each}}</div>');

Handlebars.registerHelper('animalName', function(name) {
	return name.replace(' ', '_');
});

var categories = $("#category-template").html();
var category_template = Handlebars.compile(categories);
var category_html = category_template(animals_data);
$(".nav-tabs").html(category_html);

var animals = $('#animal-template').html();
var animal_template = Handlebars.compile(animals)
var animal_html = animal_template(animals_data);
$("#myTabContent").html(animal_html);