import Ember from 'ember';
import layout from '../templates/components/nano-scroll';

const { Component, Evented, on, run } = Ember;

// TODO: Test coverage for events and properties

export default Component.extend(Evented, {
  layout,

  classNames: ['nano'],

  initNanoScroll: on('didInsertElement', function() {
    const scroller = this.$().nanoScroller({
      iOSNativeScrolling: this.get('iOSNativeScrolling'),
      sliderMinHeight: this.get('sliderMinHeight'),
      sliderMaxHeight: this.get('sliderMaxHeight'),
      preventPageScrolling: this.get('preventPageScrolling'),
      disableResize: this.get('disableResize'),
      alwaysVisible: this.get('alwaysVisible'),
      flashDelay: this.get('flashDelay'),
      paneClass: this.get('paneClass'),
      sliderClass: this.get('sliderClass'),
      contentClass: this.get('contentClass'),
      tabIndex: this.get('tabIndex'),
      scrollTop: this.get('scrollTop'),
      scrollBottom: this.get('scrollBottom')
    });

    scroller.on('scrollend', (...args) => this.trigger('scrollend', ...args));
    scroller.on('scrolltop', (...args) => this.trigger('scrolltop', ...args));

    this.set('scroller', scroller);

    if (this.get('scrollTop')) {
      run.scheduleOnce('afterRender', () => {
        this.get('scroller').nanoScroller({ scrollTop: this.get('scrollTop') });
      });
    }

    if (this.get('scrollBottom')) {
      run.scheduleOnce('afterRender', () => {
        this.get('scroller').nanoScroller({ scrollBottom: this.get('scrollBottom') });
      });
    }
  }),

  scroll(scroll) {
    this.get('scroller').nanoScroller({
      scroll,
    });
  },

  scrollTo(scrollTo) {
    this.get('scroller').nanoScroller({
      scrollTo,
    });
  },

  stop(stop) {
    this.get('scroller').nanoScroller({
      stop,
    });
  },

  destroy(destroy) {
    this.get('scroller').nanoScroller({
      destroy,
    });
  },

  flash(flash) {
    this.get('scroller').nanoScroller({
      flash,
    });
  },

  refresh() {
    this.get('scroller').nanoScroller();
  },
});
