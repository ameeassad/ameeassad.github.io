let description;

    document.onmouseover = function(event) {

      let anchorElem = event.target.closest('[data-description]');

      if (!anchorElem) return;

      // show description and remember it
      description = showDescription(anchorElem, anchorElem.dataset.description);
    }

    document.onmouseout = function() {

      if (description) {
        description.remove();
        description = false;
      }

    }


    function showDescription(anchorElem, html) {
      let descriptionElem = document.createElement('div');
      descriptionElem.className = 'description';
      descriptionElem.innerHTML = html;
      document.body.append(descriptionElem);

      let coords = anchorElem.getBoundingClientRect();

      // position the description over the center of the element
      let left = coords.left + (anchorElem.offsetWidth - descriptionElem.offsetWidth) / 2;
      if (left < 0) left = 0;

      let top = coords.top - descriptionElem.offsetHeight - 5;
      if (top < 0) {
        top = coords.top + anchorElem.offsetHeight + 5;
      }

      descriptionElem.style.left = left + 'px';
      descriptionElem.style.top = top + 'px';

      return descriptionElem;
    }
