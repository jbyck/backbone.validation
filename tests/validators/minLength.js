buster.testCase("minLength validator", {
    setUp: function() {
        var that = this;
        var Model = Backbone.Model.extend({
            validation: {
                name: {
                    minLength: 2
                }
            }
        });
        
        this.model = new Model();
        this.view = new Backbone.View({
            model: this.model
        });

        Backbone.Validation.bind(this.view, {
            valid: this.spy(),
            invalid: this.spy()
        });
    },
    
    "undefined is invalid": function() {
        refute(this.model.set({
            name: undefined
        }));
    },

    "string with length shorter than minLenght is invalid": function() {
        refute(this.model.set({
            name: 'a'
        }));
    },

    "string with length equal to minLength is valid": function() {
        assert(this.model.set({
            name: 'aa'
        }));
    }
});