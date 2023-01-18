export const querySelectorAllShadows = `function querySelectorAllShadows(selector, el = document.body) {
    // recurse on childShadows
    const childShadows = Array.from(el.querySelectorAll('*')).
        map(el => el.shadowRoot).filter(Boolean);
    const childResults = childShadows.map(child => querySelectorAllShadows(selector, child));
    
    // fuse all results into singular, flat array
    const result = Array.from(el.querySelectorAll(selector));
    return result.concat(childResults).flat();
}`;

export const showMoreXPath = "//button[contains(., 'Show More Comments')]";

export const sortButtonXPath = "//button[contains(@class, 'sort-filter-button')]";

export const sortByCreatedAtXPath = "//div[contain(., 'Newest Reactions')]";
