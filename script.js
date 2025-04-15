async function loadMetrics() {
    try {
        // Replace with your CMS API endpoint (e.g., Contentful, Strapi)
        const response = await fetch('https://api.mocki.app/v2/515f4b7c-7d3b-4d92-a376-78d7b64f8f5f');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const container = document.getElementById('cms-metrics');
        container.innerHTML = ''; // Clear any existing content

        data.forEach(metric => {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-3';
            card.innerHTML = `
                <div class="hover-card p-3 text-center">
                    <h5 class="mb-2">${metric.title}</h5>
                    <span class="fs-3">${metric.value}</span>
                    <p class="text-muted mt-2">${metric.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading CMS metrics:', error);
        const container = document.getElementById('cms-metrics');
        container.innerHTML = '<p class="text-danger">Failed to load metrics</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadMetrics);