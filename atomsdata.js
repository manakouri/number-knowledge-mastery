/* Atoms Section Layout */
.atoms-section {
    background: #f8fafc;
    border-radius: 8px;
    padding: 1.25rem;
    border: 1px solid #e2e8f0;
    margin: 1rem 0;
}

.section-label {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #94a3b8;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 0.75rem;
}

.atom-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f5f9;
}

.atom-item:last-child { border-bottom: none; border-bottom: none; padding-bottom: 0; margin-bottom: 0; }

.atom-text {
    font-size: 0.95rem;
    color: #334155;
    line-height: 1.5;
}

/* Atom Type Badges with Boulton-inspired colors */
.atom-badge {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    flex-shrink: 0;
    margin-top: 2px;
}

.atom-badge.fact { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; }           /* Blue */
.atom-badge.categorical { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }    /* Green */
.atom-badge.transformation { background: #ffedd5; color: #9a3412; border: 1px solid #fed7aa; } /* Orange */
.atom-badge.routine { background: #f3e8ff; color: #6b21a8; border: 1px solid #e9d5ff; }        /* Purple */
