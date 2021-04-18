import React from 'react';
import "./AdminHome.css"
const AdminHome = () => {
    return (
        <div className="adminHomePage">
            <figure>
                <blockquote class="blockquote">
                    <p>Welcome to Admin Panel. Customize What You Need!</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                Management button for product management<cite title="Source Title"></cite>
                </figcaption>
                <figcaption class="blockquote-footer">
                Add Product with Add Products button<cite title="Source Title"></cite>
                </figcaption>
            </figure>
        </div>
    );
};

export default AdminHome;