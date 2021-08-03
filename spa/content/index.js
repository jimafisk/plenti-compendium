/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Featured from '../components/featured.js';
import Sections from '../components/sections.js';

function create_if_block_1(ctx) {
	let div;
	let featured;
	let current;

	featured = new Featured({
			props: {
				allFeatures: /*allFeatures*/ ctx[6],
				featuredPage: /*featuredPage*/ ctx[5]
			}
		});

	return {
		c() {
			div = element("div");
			create_component(featured.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(featured.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "w-full row -mt-16");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(featured, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(featured.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(featured.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(featured);
		}
	};
}

// (34:4) {#if featuredPage == "Frame" && currentPage <= 1}
function create_if_block(ctx) {
	let div;
	let featured;
	let current;

	featured = new Featured({
			props: {
				allFeatures: /*allFeatures*/ ctx[6],
				featuredPage: /*featuredPage*/ ctx[5]
			}
		});

	return {
		c() {
			div = element("div");
			create_component(featured.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(featured.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "w-full row mt-6 sm:mt-16");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(featured, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(featured.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(featured.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(featured);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let t0;
	let div0;
	let t1;
	let div2;
	let t2;
	let div1;
	let sections;
	let t3;
	let div3;
	let current;
	let if_block0 = /*featuredPage*/ ctx[5] == "Bleed" && /*currentPage*/ ctx[2] <= 1 && create_if_block_1(ctx);
	let if_block1 = /*featuredPage*/ ctx[5] == "Frame" && /*currentPage*/ ctx[2] <= 1 && create_if_block(ctx);

	sections = new Sections({
			props: {
				allPosts: /*allPosts*/ ctx[0],
				content: /*content*/ ctx[1],
				postRangeHigh: /*postRangeHigh*/ ctx[3],
				postRangeLow: /*postRangeLow*/ ctx[4],
				currentPage: /*currentPage*/ ctx[2],
				totalPages: /*totalPages*/ ctx[7]
			}
		});

	return {
		c() {
			section = element("section");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			t1 = space();
			div2 = element("div");
			if (if_block1) if_block1.c();
			t2 = space();
			div1 = element("div");
			create_component(sections.$$.fragment);
			t3 = space();
			div3 = element("div");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			if (if_block0) if_block0.l(section_nodes);
			t0 = claim_space(section_nodes);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t1 = claim_space(section_nodes);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (if_block1) if_block1.l(div2_nodes);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(sections.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_space(section_nodes);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			children(div3).forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(div1, "class", "w-full");
			attr(div2, "class", "w-full md:w-10/12 xl:w-8/12 px-2 md:px-0");
			attr(div3, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(section, "class", "flex flex-wrap items-center justify-between pb-11");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			if (if_block0) if_block0.m(section, null);
			append(section, t0);
			append(section, div0);
			append(section, t1);
			append(section, div2);
			if (if_block1) if_block1.m(div2, null);
			append(div2, t2);
			append(div2, div1);
			mount_component(sections, div1, null);
			append(section, t3);
			append(section, div3);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*featuredPage*/ ctx[5] == "Bleed" && /*currentPage*/ ctx[2] <= 1) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*currentPage*/ 4) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(section, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*featuredPage*/ ctx[5] == "Frame" && /*currentPage*/ ctx[2] <= 1) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*currentPage*/ 4) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div2, t2);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			const sections_changes = {};
			if (dirty & /*allPosts*/ 1) sections_changes.allPosts = /*allPosts*/ ctx[0];
			if (dirty & /*content*/ 2) sections_changes.content = /*content*/ ctx[1];
			if (dirty & /*postRangeHigh*/ 8) sections_changes.postRangeHigh = /*postRangeHigh*/ ctx[3];
			if (dirty & /*postRangeLow*/ 16) sections_changes.postRangeLow = /*postRangeLow*/ ctx[4];
			if (dirty & /*currentPage*/ 4) sections_changes.currentPage = /*currentPage*/ ctx[2];
			sections.$set(sections_changes);
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(sections.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(sections.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			destroy_component(sections);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let currentPage;
	let postRangeHigh;
	let postRangeLow;
	let { allPosts } = $$props, { content } = $$props, { theme } = $$props;
	let featuredPage = theme.featuredPage;
	let allFeatures = allPosts.filter(content => content.fields?.featured);
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / theme.postsPerPage);

	$$self.$$set = $$props => {
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("theme" in $$props) $$invalidate(8, theme = $$props.theme);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 2) {
			$: $$invalidate(2, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage, theme*/ 260) {
			$: $$invalidate(3, postRangeHigh = currentPage * theme.postsPerPage);
		}

		if ($$self.$$.dirty & /*postRangeHigh, theme*/ 264) {
			$: $$invalidate(4, postRangeLow = postRangeHigh - theme.postsPerPage);
		}
	};

	return [
		allPosts,
		content,
		currentPage,
		postRangeHigh,
		postRangeLow,
		featuredPage,
		allFeatures,
		totalPages,
		theme
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { allPosts: 0, content: 1, theme: 8 });
	}
}

export default Component;