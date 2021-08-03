/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Search from '../components/search.js';
import Social from '../components/social.js';

function create_fragment(ctx) {
	let aside;
	let div2;
	let search;
	let t0;
	let social;
	let t1;
	let div0;
	let h40;
	let span;
	let t2;
	let t3;
	let ul0;
	let li0;
	let a0;
	let t4;
	let small0;
	let t5;
	let t6;
	let li1;
	let a1;
	let t7;
	let small1;
	let t8;
	let t9;
	let li2;
	let a2;
	let t10;
	let small2;
	let t11;
	let t12;
	let li3;
	let a3;
	let t13;
	let small3;
	let t14;
	let t15;
	let li4;
	let a4;
	let t16;
	let small4;
	let t17;
	let t18;
	let div1;
	let h41;
	let t19;
	let t20;
	let ul1;
	let li5;
	let a5;
	let t21;
	let t22;
	let li6;
	let a6;
	let t23;
	let t24;
	let li7;
	let a7;
	let t25;
	let t26;
	let li8;
	let a8;
	let t27;
	let t28;
	let li9;
	let a9;
	let t29;
	let t30;
	let li10;
	let a10;
	let t31;
	let current;
	search = new Search({ props: { allPosts: /*allPosts*/ ctx[0] } });

	social = new Social({
			props: { socialLinks: /*socialLinks*/ ctx[1] }
		});

	return {
		c() {
			aside = element("aside");
			div2 = element("div");
			create_component(search.$$.fragment);
			t0 = space();
			create_component(social.$$.fragment);
			t1 = space();
			div0 = element("div");
			h40 = element("h4");
			span = element("span");
			t2 = text("Categories");
			t3 = space();
			ul0 = element("ul");
			li0 = element("li");
			a0 = element("a");
			t4 = text("Four seasons\n            ");
			small0 = element("small");
			t5 = text("(1)");
			t6 = space();
			li1 = element("li");
			a1 = element("a");
			t7 = text("Newyork city\n            ");
			small1 = element("small");
			t8 = text("(2)");
			t9 = space();
			li2 = element("li");
			a2 = element("a");
			t10 = text("Photobooth\n            ");
			small2 = element("small");
			t11 = text("(1)");
			t12 = space();
			li3 = element("li");
			a3 = element("a");
			t13 = text("Photography\n            ");
			small3 = element("small");
			t14 = text("(2)");
			t15 = space();
			li4 = element("li");
			a4 = element("a");
			t16 = text("Videography\n            ");
			small4 = element("small");
			t17 = text("(1)");
			t18 = space();
			div1 = element("div");
			h41 = element("h4");
			t19 = text("Tags");
			t20 = space();
			ul1 = element("ul");
			li5 = element("li");
			a5 = element("a");
			t21 = text("Booth,");
			t22 = space();
			li6 = element("li");
			a6 = element("a");
			t23 = text("City,");
			t24 = space();
			li7 = element("li");
			a7 = element("a");
			t25 = text("Image,");
			t26 = space();
			li8 = element("li");
			a8 = element("a");
			t27 = text("Nature,");
			t28 = space();
			li9 = element("li");
			a9 = element("a");
			t29 = text("Photo,");
			t30 = space();
			li10 = element("li");
			a10 = element("a");
			t31 = text("Video");
			this.h();
		},
		l(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			div2 = claim_element(aside_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(search.$$.fragment, div2_nodes);
			t0 = claim_space(div2_nodes);
			claim_component(social.$$.fragment, div2_nodes);
			t1 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h40 = claim_element(div0_nodes, "H4", { class: true });
			var h40_nodes = children(h40);
			span = claim_element(h40_nodes, "SPAN", {});
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, "Categories");
			span_nodes.forEach(detach);
			h40_nodes.forEach(detach);
			t3 = claim_space(div0_nodes);
			ul0 = claim_element(div0_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", {});
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t4 = claim_text(a0_nodes, "Four seasons\n            ");
			small0 = claim_element(a0_nodes, "SMALL", { class: true });
			var small0_nodes = children(small0);
			t5 = claim_text(small0_nodes, "(1)");
			small0_nodes.forEach(detach);
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t6 = claim_space(ul0_nodes);
			li1 = claim_element(ul0_nodes, "LI", {});
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t7 = claim_text(a1_nodes, "Newyork city\n            ");
			small1 = claim_element(a1_nodes, "SMALL", { class: true });
			var small1_nodes = children(small1);
			t8 = claim_text(small1_nodes, "(2)");
			small1_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t9 = claim_space(ul0_nodes);
			li2 = claim_element(ul0_nodes, "LI", {});
			var li2_nodes = children(li2);
			a2 = claim_element(li2_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t10 = claim_text(a2_nodes, "Photobooth\n            ");
			small2 = claim_element(a2_nodes, "SMALL", { class: true });
			var small2_nodes = children(small2);
			t11 = claim_text(small2_nodes, "(1)");
			small2_nodes.forEach(detach);
			a2_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			t12 = claim_space(ul0_nodes);
			li3 = claim_element(ul0_nodes, "LI", {});
			var li3_nodes = children(li3);
			a3 = claim_element(li3_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t13 = claim_text(a3_nodes, "Photography\n            ");
			small3 = claim_element(a3_nodes, "SMALL", { class: true });
			var small3_nodes = children(small3);
			t14 = claim_text(small3_nodes, "(2)");
			small3_nodes.forEach(detach);
			a3_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t15 = claim_space(ul0_nodes);
			li4 = claim_element(ul0_nodes, "LI", {});
			var li4_nodes = children(li4);
			a4 = claim_element(li4_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t16 = claim_text(a4_nodes, "Videography\n            ");
			small4 = claim_element(a4_nodes, "SMALL", { class: true });
			var small4_nodes = children(small4);
			t17 = claim_text(small4_nodes, "(1)");
			small4_nodes.forEach(detach);
			a4_nodes.forEach(detach);
			li4_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t18 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h41 = claim_element(div1_nodes, "H4", { class: true });
			var h41_nodes = children(h41);
			t19 = claim_text(h41_nodes, "Tags");
			h41_nodes.forEach(detach);
			t20 = claim_space(div1_nodes);
			ul1 = claim_element(div1_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);
			li5 = claim_element(ul1_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			a5 = claim_element(li5_nodes, "A", { href: true });
			var a5_nodes = children(a5);
			t21 = claim_text(a5_nodes, "Booth,");
			a5_nodes.forEach(detach);
			li5_nodes.forEach(detach);
			t22 = claim_space(ul1_nodes);
			li6 = claim_element(ul1_nodes, "LI", { class: true });
			var li6_nodes = children(li6);
			a6 = claim_element(li6_nodes, "A", { href: true });
			var a6_nodes = children(a6);
			t23 = claim_text(a6_nodes, "City,");
			a6_nodes.forEach(detach);
			li6_nodes.forEach(detach);
			t24 = claim_space(ul1_nodes);
			li7 = claim_element(ul1_nodes, "LI", { class: true });
			var li7_nodes = children(li7);
			a7 = claim_element(li7_nodes, "A", { href: true });
			var a7_nodes = children(a7);
			t25 = claim_text(a7_nodes, "Image,");
			a7_nodes.forEach(detach);
			li7_nodes.forEach(detach);
			t26 = claim_space(ul1_nodes);
			li8 = claim_element(ul1_nodes, "LI", { class: true });
			var li8_nodes = children(li8);
			a8 = claim_element(li8_nodes, "A", { href: true });
			var a8_nodes = children(a8);
			t27 = claim_text(a8_nodes, "Nature,");
			a8_nodes.forEach(detach);
			li8_nodes.forEach(detach);
			t28 = claim_space(ul1_nodes);
			li9 = claim_element(ul1_nodes, "LI", { class: true });
			var li9_nodes = children(li9);
			a9 = claim_element(li9_nodes, "A", { href: true });
			var a9_nodes = children(a9);
			t29 = claim_text(a9_nodes, "Photo,");
			a9_nodes.forEach(detach);
			li9_nodes.forEach(detach);
			t30 = claim_space(ul1_nodes);
			li10 = claim_element(ul1_nodes, "LI", { class: true });
			var li10_nodes = children(li10);
			a10 = claim_element(li10_nodes, "A", { href: true });
			var a10_nodes = children(a10);
			t31 = claim_text(a10_nodes, "Video");
			a10_nodes.forEach(detach);
			li10_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			aside_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h40, "class", "header mb-1");
			attr(small0, "class", "ml-auto");
			attr(a0, "href", "catgs/four-seasons");
			attr(a0, "class", "inline-flex");
			attr(small1, "class", "ml-auto");
			attr(a1, "href", "catgs/newyork-city");
			attr(a1, "class", "inline-flex");
			attr(small2, "class", "ml-auto");
			attr(a2, "href", "catgs/photobooth");
			attr(a2, "class", "inline-flex");
			attr(small3, "class", "ml-auto");
			attr(a3, "href", "catgs/photography");
			attr(a3, "class", "inline-flex");
			attr(small4, "class", "ml-auto");
			attr(a4, "href", "catgs/videography");
			attr(a4, "class", "inline-flex");
			attr(ul0, "class", "text-aside mb-4");
			attr(div0, "class", "row");
			attr(h41, "class", "header mb-1 w-full flex");
			attr(a5, "href", "tags/booth");
			attr(li5, "class", "pr-1 inline-flex");
			attr(a6, "href", "tags/city");
			attr(li6, "class", "pr-1 inline-flex");
			attr(a7, "href", "tags/image");
			attr(li7, "class", "pr-1 inline-flex");
			attr(a8, "href", "tags/new");
			attr(li8, "class", "pr-1 inline-flex");
			attr(a9, "href", "tags/photo");
			attr(li9, "class", "pr-1 inline-flex");
			attr(a10, "href", "tags/video");
			attr(li10, "class", "pr-1 inline-flex");
			attr(ul1, "class", "text-aside mb-4");
			attr(div1, "class", "row");
			attr(div2, "class", "pl-0 pl-lg-4");
			attr(aside, "class", "w-full");
		},
		m(target, anchor) {
			insert(target, aside, anchor);
			append(aside, div2);
			mount_component(search, div2, null);
			append(div2, t0);
			mount_component(social, div2, null);
			append(div2, t1);
			append(div2, div0);
			append(div0, h40);
			append(h40, span);
			append(span, t2);
			append(div0, t3);
			append(div0, ul0);
			append(ul0, li0);
			append(li0, a0);
			append(a0, t4);
			append(a0, small0);
			append(small0, t5);
			append(ul0, t6);
			append(ul0, li1);
			append(li1, a1);
			append(a1, t7);
			append(a1, small1);
			append(small1, t8);
			append(ul0, t9);
			append(ul0, li2);
			append(li2, a2);
			append(a2, t10);
			append(a2, small2);
			append(small2, t11);
			append(ul0, t12);
			append(ul0, li3);
			append(li3, a3);
			append(a3, t13);
			append(a3, small3);
			append(small3, t14);
			append(ul0, t15);
			append(ul0, li4);
			append(li4, a4);
			append(a4, t16);
			append(a4, small4);
			append(small4, t17);
			append(div2, t18);
			append(div2, div1);
			append(div1, h41);
			append(h41, t19);
			append(div1, t20);
			append(div1, ul1);
			append(ul1, li5);
			append(li5, a5);
			append(a5, t21);
			append(ul1, t22);
			append(ul1, li6);
			append(li6, a6);
			append(a6, t23);
			append(ul1, t24);
			append(ul1, li7);
			append(li7, a7);
			append(a7, t25);
			append(ul1, t26);
			append(ul1, li8);
			append(li8, a8);
			append(a8, t27);
			append(ul1, t28);
			append(ul1, li9);
			append(li9, a9);
			append(a9, t29);
			append(ul1, t30);
			append(ul1, li10);
			append(li10, a10);
			append(a10, t31);
			current = true;
		},
		p(ctx, [dirty]) {
			const search_changes = {};
			if (dirty & /*allPosts*/ 1) search_changes.allPosts = /*allPosts*/ ctx[0];
			search.$set(search_changes);
			const social_changes = {};
			if (dirty & /*socialLinks*/ 2) social_changes.socialLinks = /*socialLinks*/ ctx[1];
			social.$set(social_changes);
		},
		i(local) {
			if (current) return;
			transition_in(search.$$.fragment, local);
			transition_in(social.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(search.$$.fragment, local);
			transition_out(social.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(aside);
			destroy_component(search);
			destroy_component(social);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allPosts } = $$props, { socialLinks } = $$props;

	$$self.$$set = $$props => {
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("socialLinks" in $$props) $$invalidate(1, socialLinks = $$props.socialLinks);
	};

	return [allPosts, socialLinks];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { allPosts: 0, socialLinks: 1 });
	}
}

export default Component;