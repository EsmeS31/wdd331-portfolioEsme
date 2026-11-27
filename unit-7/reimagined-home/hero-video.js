(() => {
    const frame = document.querySelector('.hero-media iframe');
    const container = frame?.parentElement;
    if (!frame || !container) return;

    const fitFrame = () => {
        const { width, height } = container.getBoundingClientRect();
        if (!width || !height) return;

        // Keep the 16:9 video proportional and cover the entire hero viewport.
        const unit = Math.max(width / 9, height / 9);
        frame.style.width = `${9 * unit}px`;
        frame.style.height = `${9 * unit}px`;
    };

    new ResizeObserver(fitFrame).observe(container);
    fitFrame();
})();
