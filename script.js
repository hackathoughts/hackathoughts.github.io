---
readme: "This JS file gets preprocessed by Jekyll before it's used! This three-dash front-matter section is needed to tell Jekyll to preprocess the file. The template markup transforms data from /_data into valid JS. Yes, this code is rotted and gutted, but it's the only way I've found to transfer Jekyll data into JS variables."
---

Vue.createApp({
    delimiters: ['[[', ']]'],
    data: function() {
        return {
            tips: [
                {% for data_file in site.data.tips %}
                    {% assign content = data_file[1] %}
                    {% for tip in content.tips %}
                    {
                        tipText: "{{ tip.tip }}",
                        {% unless tip.by == nil %}
                            by: "{{ tip.by }}",
                        {% else %}
                            by: "{{ content.author }}",
                        {% endunless %}
                        date: new Date("{{ tip.date }}"),
                        tags: [
                            {% for tag in tip.tags %}
                                "{{ tag }}",
                            {% endfor %}
                        ]
                    },
                    {% endfor %}
                {% endfor %}
            ],
            tags: [
                {% for tag in site.data.tags %}
                    "{{tag}}",
                {% endfor %}
            ],
            visibleTags: [
                {% for tag in site.data.tags %}
                    "{{tag}}",
                {% endfor %}
            ]
        };
    },
    computed: {
        visibleTips: function () {
            var visibleTags = this.visibleTags;
            return this.tips.filter(function(tip) {
                return tip.tags.some(tag => visibleTags.includes(tag));
            }).sort(
                (a, b) => b.date - a.date // most recent first
            );
        }
    }
}).mount("#app");