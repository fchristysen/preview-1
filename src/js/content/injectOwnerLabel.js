const LABEL_IDENTIFIER = "gh-preview-owner";

export default function injectOwnerLabel(header, owners) {
  if (owners.length === 0) {
    return;
  }

  const label = header.querySelector(`.${LABEL_IDENTIFIER}`);

  if (!label) {
    const labelContainer = document.createElement("div");
    labelContainer.className = LABEL_IDENTIFIER;

    // inject list of owners inside fragments to prevent page reflow
    const fragment = document.createDocumentFragment();
    const title = document.createElement("strong");
    title.textContent = owners.length === 1 ? "Owner: " : "Owners: ";
    fragment.appendChild(title);

    owners.forEach(owner => {
      const span = document.createElement("span");
      span.textContent = owner;
      fragment.appendChild(span);
    });

    labelContainer.appendChild(fragment);
    header.querySelector(".file-info").appendChild(labelContainer);
  }
}
