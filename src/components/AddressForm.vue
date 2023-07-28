<script setup></script>

<template>
    <FormKit
        type="form"
        submit-label="Order now!"
    >
        <FormKit
            name="email"
            type="email"
            label="Email"
            placeholder="you@domain.tld"
            validation="required|email"
        />
        <FormKit
            name="newsletter"
            type="checkbox"
            label="Newsletter"
            help="Contact me with news and offers"
            :value="false"
        />
        <FormKit type="group" name="address">
            <FormKit
                type="select"
                name="country"
                label="Country"
                placeholder="Country"
                validation="required"
                help="Only countries we ship to are available"
                value="Germany"
                :options="[
                    'Austria',
                    'France',
                    'Germany',
                    'Italy',
                    'Narnia',
                    'Poland',
                    'Spain',
                    'Switzerland'
                ]"
            />
            <div class="columns">
                <div class="column">
                    <FormKit
                        type="text"
                        name="firstName"
                        label="First name"
                        placeholder="First name"
                        validation="required"
                    />
                </div>
                <div class="column">
                    <FormKit
                        type="text"
                        name="lastName"
                        label="Last name"
                        placeholder="Last name"
                        validation="required"
                    />
                </div>
            </div>
            <FormKit
                type="text"
                name="address"
                label="Address"
                placeholder="Address"
                validation="required"
            />
            <div class="columns">
                <div class="column">
                    <FormKit
                        type="text"
                        name="zip"
                        label="Zip Code"
                        placeholder="Zip Code"
                        validation="required"
                    />
                </div>
                <div class="column">
                    <FormKit
                        type="text"
                        name="city"
                        label="City"
                        placeholder="City"
                        validation="required"
                    />
                </div>
            </div>
            <FormKit
                type="tel"
                name="phone"
                label="Phone (optional)"
                placeholder="Phone (optional)"
                validation=""
            />
        </FormKit>
    </FormKit>
</template>