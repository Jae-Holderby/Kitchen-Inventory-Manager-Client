import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    quantity: DS.attr('number'),
    protein: DS.attr('boolean'),
    fruit: DS.attr('boolean'),
    vegetable: DS.attr('boolean'),
    spice: DS.attr('boolean'),
    misc: DS.attr('boolean')
});
