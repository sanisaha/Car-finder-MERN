import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;