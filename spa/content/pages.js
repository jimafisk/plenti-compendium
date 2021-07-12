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
	claim_text,
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
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "svelte/internal";

import About from "../components/about.svelte";
import Contact from "../components/contact.svelte";

function create_else_block(ctx) {
	let div0;
	let t0;
	let div3;
	let div2;
	let div1;
	let h2;
	let t1;
	let t2;
	let t3;
	let div4;

	return {
		c() {
			div0 = element("div");
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			h2 = element("h2");
			t1 = text(/*title*/ ctx[4]);
			t2 = text(" Page");
			t3 = space();
			div4 = element("div");
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, /*title*/ ctx[4]);
			t2 = claim_text(h2_nodes, " Page");
			h2_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t3 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			children(div4).forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(h2, "class", "header");
			attr(div1, "class", "mb-2");
			attr(div2, "class", "relative rounded-lg overflow-hidden");
			attr(div3, "class", "w-full md:w-10/12 xl:w-8/12 px-2 md:px-0");
			attr(div4, "class", "w-0 md:w-1/12 xl:w-2/12");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			insert(target, t0, anchor);
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, div1);
			append(div1, h2);
			append(h2, t1);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, div4, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*title*/ 16) set_data(t1, /*title*/ ctx[4]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t0);
			if (detaching) detach(div3);
			if (detaching) detach(t3);
			if (detaching) detach(div4);
		}
	};
}

// (23:42) 
function create_if_block_1(ctx) {
	let contact;
	let current;

	contact = new Contact({
			props: {
				idxContent: /*idxContent*/ ctx[0],
				allPosts: /*allPosts*/ ctx[1],
				socialLinks: /*socialLinks*/ ctx[9],
				title: /*title*/ ctx[4],
				articleBody: /*articleBody*/ ctx[8]
			}
		});

	return {
		c() {
			create_component(contact.$$.fragment);
		},
		l(nodes) {
			claim_component(contact.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(contact, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const contact_changes = {};
			if (dirty & /*idxContent*/ 1) contact_changes.idxContent = /*idxContent*/ ctx[0];
			if (dirty & /*allPosts*/ 2) contact_changes.allPosts = /*allPosts*/ ctx[1];
			if (dirty & /*title*/ 16) contact_changes.title = /*title*/ ctx[4];
			if (dirty & /*articleBody*/ 256) contact_changes.articleBody = /*articleBody*/ ctx[8];
			contact.$set(contact_changes);
		},
		i(local) {
			if (current) return;
			transition_in(contact.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(contact.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(contact, detaching);
		}
	};
}

// (18:2) {#if (menu == "About" && enabled)}
function create_if_block(ctx) {
	let about;
	let current;

	about = new About({
			props: {
				title: /*title*/ ctx[4],
				image: /*image*/ ctx[5],
				hero: /*hero*/ ctx[6],
				splash: /*splash*/ ctx[7],
				articleBody: /*articleBody*/ ctx[8]
			}
		});

	return {
		c() {
			create_component(about.$$.fragment);
		},
		l(nodes) {
			claim_component(about.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(about, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const about_changes = {};
			if (dirty & /*title*/ 16) about_changes.title = /*title*/ ctx[4];
			if (dirty & /*image*/ 32) about_changes.image = /*image*/ ctx[5];
			if (dirty & /*hero*/ 64) about_changes.hero = /*hero*/ ctx[6];
			if (dirty & /*splash*/ 128) about_changes.splash = /*splash*/ ctx[7];
			if (dirty & /*articleBody*/ 256) about_changes.articleBody = /*articleBody*/ ctx[8];
			about.$set(about_changes);
		},
		i(local) {
			if (current) return;
			transition_in(about.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(about.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(about, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*menu*/ ctx[2] == "About" && /*enabled*/ ctx[3]) return 0;
		if (/*menu*/ ctx[2] = "Contact" && /*enabled*/ ctx[3]) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = element("div");
			if_block.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "w-full py-16");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if_blocks[current_block_type_index].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { idxContent } = $$props,
		{ allPosts } = $$props,
		{ menu } = $$props,
		{ enabled } = $$props,
		{ title } = $$props,
		{ image } = $$props,
		{ hero } = $$props,
		{ splash } = $$props,
		{ articleBody } = $$props;

	let socialLinks = idxContent.socialLinks;

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(0, idxContent = $$props.idxContent);
		if ("allPosts" in $$props) $$invalidate(1, allPosts = $$props.allPosts);
		if ("menu" in $$props) $$invalidate(2, menu = $$props.menu);
		if ("enabled" in $$props) $$invalidate(3, enabled = $$props.enabled);
		if ("title" in $$props) $$invalidate(4, title = $$props.title);
		if ("image" in $$props) $$invalidate(5, image = $$props.image);
		if ("hero" in $$props) $$invalidate(6, hero = $$props.hero);
		if ("splash" in $$props) $$invalidate(7, splash = $$props.splash);
		if ("articleBody" in $$props) $$invalidate(8, articleBody = $$props.articleBody);
	};

	return [
		idxContent,
		allPosts,
		menu,
		enabled,
		title,
		image,
		hero,
		splash,
		articleBody,
		socialLinks
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 0,
			allPosts: 1,
			menu: 2,
			enabled: 3,
			title: 4,
			image: 5,
			hero: 6,
			splash: 7,
			articleBody: 8
		});
	}
}

export default Component;