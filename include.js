/**
 * Load HTML components dynamically from the components directory
 * @param {string} id - The ID of the target element where component will be inserted
 * @param {string} file - The path to the component HTML file
 */
async function loadComponent(id, file) {
    try {
        const res = await fetch(file);
        if (!res.ok) {
            throw new Error(`Failed to load ${file}: ${res.status} ${res.statusText}`);
        }
        const data = await res.text();
        const targetElement = document.getElementById(id);
        if (!targetElement) {
            console.warn(`Target element with id '${id}' not found`);
            return;
        }
        targetElement.innerHTML = data;
    } catch (error) {
        console.error(`Error loading component from ${file}:`, error);
        // Optional: Load fallback content
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.innerHTML = `<div class="alert alert-warning">Failed to load component</div>`;
        }
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadComponent("navbar", "./components/navbar.html");
    loadComponent("footer", "./components/footer.html");
});